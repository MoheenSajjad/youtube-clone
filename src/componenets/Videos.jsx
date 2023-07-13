import React from 'react'
import { Stack,Box } from '@mui/material'
import {VideoCard,ChannelCard} from './'

const Videos = ({video,direction}) => {
  return (
    <Stack direction={direction||'row'} flexWrap="wrap" 
    justifyContent={{sm:'start',md:'start'}}  gap={2} >
      {video.map((item,idx)=>{
        return(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard ChannelDetail={item}/>}
        </Box>
        )
        // console.log(item.id.channelId)
      })}
    </Stack>
  )
}

export default Videos