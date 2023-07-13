import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from './utils/constants'

const ChannelCard = ({ ChannelDetail,marginTop }) => {
  console.log("channel card",ChannelDetail)
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display:'flex',
        justifyContent:'ceneter',
        alignItems:'center',
        width:{xs:'356px',md:'320px'},
        height:'326px',
        margin:'auto',
        marginTop
      }}>
      <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex", flexDirection: 'column',
            justifyContent: 'cneter', textAlign: 'center', color: '#fff',ml:'34px'
          }}>
            <CardMedia 
            image={ChannelDetail?.snippet?.thumbnails?.high?.url||demoProfilePicture}
            al={ChannelDetail?.snippet?.title}
            sx={{borderRadius:'50%',width:'180px',height:'180px',mb:2,border:'1px solid #e3e3e3'}}/>
            <Typography
            variant='h6'>{ChannelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: '5px' }} /></Typography>
            {ChannelDetail?.statistics?.subscriberCount&&(
              <Typography>
                {parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString()}Subscribers
              </Typography>
            )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard