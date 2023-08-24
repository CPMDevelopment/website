from flask import Flask, request, jsonify
from datetime import datetime, timedelta
import time
import subprocess
import os

app = Flask(__name__)

# Store the interval and time settings
settings = {
    "interval": None,
    "start_time": None,
    "end_time": None,
    "days_of_week": {}
}

# Function to capture images
def capture_images():
    try:
        gp(triggerCommand)
        sleep(10)
        gp(downloadCommand)
        gp(clearCommand)
        return True
    except Exception as e:
        print("An error occurred while capturing images:", str(e))
        return False

# ... Rest of your existing code ...

# Update settings based on form data
def update_settings(data):
    settings["interval"] = int(data["interval"])
    settings["start_time"] = data["startTime"]
    settings["end_time"] = data["endTime"]
    settings["days_of_week"] = data["daysOfWeek"]

@app.route('/update_interval', methods=['POST'])
def update_interval():
    data = request.json
    update_settings(data)
    
    return jsonify({"message": "Settings updated successfully"})

@app.route('/capture', methods=['POST'])
def capture():
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    current_day = datetime.now().strftime("%A").lower()
    
    if (
        settings["start_time"] <= now <= settings["end_time"] and
        settings["days_of_week"][current_day]
    ):
        current_time = datetime.now().strftime("%H:%M")
        start_capture_time = datetime.strptime(settings["start_time"], "%H:%M")
        end_capture_time = datetime.strptime(settings["end_time"], "%H:%M")
        interval = timedelta(minutes=settings["interval"])
        
        if start_capture_time <= datetime.strptime(current_time, "%H:%M") <= end_capture_time:
            while datetime.strptime(current_time, "%H:%M") <= end_capture_time:
                success = capture_images()
                if success:
                    shot_time = datetime.now().strftime("%Y%m%d%H%M%S")
                    renameFiles(shot_time)
                    os.system('rclone sync -v  /home/ferry/Desktop/Gphoto piod:GTL_CAMERAS/KAPITOL-UNIT#1')
                    os.system('rclone sync -v  /home/ferry/Desktop/Gphoto piod:GTL_CAMERAS/KANG-UNIT#2')
                time.sleep(interval.total_seconds())  # Sleep for interval in seconds
                current_time = (datetime.strptime(current_time, "%H:%M") + interval).strftime("%H:%M")
                
        return jsonify({"message": "Image captured successfully"})
    else:
        return jsonify({"message": "Image capture not allowed at this time"})
        #Here get it to run the sms code which will warn via messaging code is above

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
