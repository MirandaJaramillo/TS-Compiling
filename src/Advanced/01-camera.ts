import { Camera, CameraResultType, CameraDirection } from '@capacitor/camera';

const takePicture = async () => {
  //capture photo with getPhoto
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    // using enum imported in CameraResult Type
    resultType: CameraResultType.Base64,
    direction: CameraDirection.Rear,
  });


};
