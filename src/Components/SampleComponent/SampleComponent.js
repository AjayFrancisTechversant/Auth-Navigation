import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
var RNFS = require('react-native-fs');

const SampleComponent = () => {

  const handleDownload = async () => {

    await RNFS.mkdir(`${RNFS.DownloadDirectoryPath}/pics`)
    const path =`${RNFS.DownloadDirectoryPath}/pic1.jpeg`
    console.log(path);
   try {
    const downloadedFile =await RNFS.downloadFile({ fromUrl: 'https://firebasestorage.googleapis.com/v0/b/awesomeproject1-a4d6d.appspot.com/o/Pics%2Fpic1?alt=media&token=fb8e3606-2f3d-47fe-b25f-ea5a50c5b8af', toFile: path }).promise
    console.log( downloadedFile);
   } catch (error) {
    console.log(error);
   }
  }
  return (
    <View>
      <Text>SampleComponent</Text>
      <TouchableOpacity onPress={() => handleDownload()}>
        <Text>
          download an image
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SampleComponent