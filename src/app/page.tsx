import Image from 'next/image'
import styles from './page.module.css'
import { Box, Text } from '@chakra-ui/react';
import {Profile} from '@/components/Profile'
import { CheckBox } from '../components/CheckBox'
import Link from 'next/link'
import { FeedBack } from '@/components/FeedBack'
// import History from '@/components/HistoryComp';




export default function Home() {
  return (
    <Box bg={'gray.500'}>
  <Profile/>
  <hr/>
  <CheckBox/>
  <hr/>
  <Link href={"/Policy"}>PrivacyPolicy</Link>
  <hr/>
  <FeedBack/>
  <hr/>
  
  <Link href={"/History"}>History</Link>
  
  
  </Box>
  )
}


