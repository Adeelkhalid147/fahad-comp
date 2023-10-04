import Image from 'next/image'
import styles from './page.module.css'
import { Box } from '@chakra-ui/react'
import {Profile} from '@/components/Profile'
import { CheckBox } from '../components/CheckBox'
import Link from 'next/link'



export default function Home() {
  return (
    <>
  <Profile/>
  <hr/>
  <CheckBox/>
  <hr/>
  <Link href={"/Policy"}>PrivacyPolicy</Link>
  
  
  </>
  )
}
