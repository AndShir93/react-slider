export const localImages = ['./images/1.jpg','./images/2.jpg','./images/3.jpg'];
export const remoteImages = ['https://avatars.mds.yandex.net/get-pdb/2822999/f4807348-53f7-4c00-9f27-8a2c599eb354/s1200','https://avatars.mds.yandex.net/get-pdb/2804075/db5b009d-0101-40cb-8343-7092feadf9b8/s1200','https://avatars.mds.yandex.net/get-pdb/2828692/5656fac1-71b6-4409-bb3d-c376cf6d393d/s1200'];
export default (item, items) =>({
    image: localImages[0],
    isLocal: true,
    localImages: localImages,
    remoteImages: remoteImages,
    current: 0
})
