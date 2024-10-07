"use client"
import React, { useState } from 'react'
import NavbarCom from "../components/NavbarCom";
import Link from 'next/link';

// ไปโหลดfont awesomeตามโค้ดบรรทัด 4
// npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function CompanyPage() {
    return (
        <div>
            <NavbarCom />
            <div className='container mx-auto py-5 px-10'>
                <div className='flex justify-between items-center'> {/* ใช้ flex และ justify-between */}
                    <h1 className='text-2xl font-bold'>Jobs</h1> {/* Jobs จะถูกจัดอยู่ซ้ายสุด */}
                    <Link href="/Ann" legacyBehavior>
                        <a style={styles.profileIconContainer}>
                        <FontAwesomeIcon icon={faPlus} /> {/* ไอคอนจะอยู่ขวาสุด */}
                        </a>
                    </Link>
                </div>
                <hr className='my-3'/>
            </div>

        </div>
    )
    }
  
    const styles = {
        profileIconContainer: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: '5px',
        },
      profileIcon: {
        color: '#000', // เปลี่ยนสีเป็นสีดำ
        fontSize: '40px', // ขนาดของไอคอน
        },
    };
  
    export default CompanyPage;