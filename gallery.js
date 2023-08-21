/*const accessToken = 'Insseerrtt-access-token-hereeee';*/
const accessToken = ''
/* const folderId = 'put-the-folder-id-for-the-one-drive-folder-which-is-being-referred'; */
const folderId = 'https://capturepointmedia-my.sharepoint.com/personal/max_capturepointmedia_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmax%5Fcapturepointmedia%5Fonmicrosoft%5Fcom%2FDocuments%2FGTL%5FCAMERAS%2FKANG%2DUNIT%232&view=0'

const galleryContainer = document.getElementById('galleryContainer');
async function fetchLatestImage() {
  try {
    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/drive/items/${folderId}/children?$orderby=lastModifiedDateTime desc&$top=1`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from OneDrive API.');
    }

    const data = await response.json();
    if (data.value && data.value.length > 0) {
      const latestImage = data.value[0];
      const imageUrl = latestImage['@microsoft.graph.downloadUrl'];
      const imageFileName = latestImage.name;
      const imageModifiedTime = new Date(latestImage.lastModifiedDateTime).toLocaleString(); 
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageElement.alt = imageFileName; 

      const imageInfoElement = document.createElement('p');
      imageInfoElement.textContent = `Name: ${imageFileName}, Last Modified: ${imageModifiedTime}`;

      galleryContainer.appendChild(imageElement);
      galleryContainer.appendChild(imageInfoElement);
    } else {
      galleryContainer.textContent = 'No images found in the specified folder.';
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    galleryContainer.textContent = 'Error fetching data from OneDrive.';
  }

  
  
fetchLatestImage();
