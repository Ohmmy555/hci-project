import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import CollapsIcon from './icons/CollapsIcon';
import ExamIcon from './icons/ExamIcon';
import HomeIcon from './icons/HomeIcon';
import LessonIcon from './icons/LessonIcon';
import LogoIcon from './icons/LogoIcon';
import LogoutIcon from './icons/LogoutIcon';
import SettingIcon from './icons/SettingIcon';

const menuItems = [
  { id: 1, label: "หน้าแรก", icon: HomeIcon, link: "/"},
  { id: 2, label: "บทเรียนของฉัน", icon: LessonIcon, link: "/Lesson"},
  { id: 3, label: "คลังข้อสอบ", icon: ExamIcon, link: "/Exam"},
  { id: 4, label: "ตั้งค่า", icon: SettingIcon, link: "/Setting"},
]

function Sideber() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const router = useRouter();
  const activeMenu = useMemo(() => menuItems.find(menu => menu.link === router.pathname),[router.pathname]);

  const wrapperClasses = classNames('h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col',
  {
    ["w-80"]:!toggleCollapse,
    ["w-20"]:toggleCollapse,
  }
  )
  const collapseIconClasses = classNames('p-2 rounded bg-light-lighter absolute right-0',
  {
    "rotate-180": toggleCollapse,
  })

  const getNavItemClasses = (menu) => {
    return classNames("flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
    {
      ['bg-light-lighter']:activeMenu?.id === menu.id,
    })
  }

  const onMouseOver = () =>{
    setIsCollapsible(!isCollapsible)
  }

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse)
  }
  return (
    <div className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver} style={{transition:"width 300ms cubic-bezier(0.2,0,0,1) 0s"}}>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between relative'> 
        <div className='flex items-center pl-1 gap-4'>
          <LogoIcon/>
          <span className={classNames('mt-2 text-2xl font-medium text-primary',{
            hidden: toggleCollapse,

          })}>HCI-learning</span>
        </div>
        {isCollapsible && (<button className={collapseIconClasses} onClick={handleSidebarToggle}>
          <CollapsIcon />
        </button>)}
        </div>

<div className='flex flex-col items-start mt-10'>
{menuItems.map(({ icon: Icon,...menu}) => {
  const classes = getNavItemClasses (menu)
return(
  <div className={classes}>
    <Link href={menu.link}>
      <div id="link" className='flex py-4 px-3 items-center w-full h-full text-primary'>
        <div style={{width:'2.5rem'}}>
          <Icon/>
        </div>
        {!toggleCollapse && (
          <span className={classNames('text-md font-medium')}>{menu.label}</span>
        )}
      </div>
    </Link>
  </div>
)
})}
</div>

      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4 mt-96`}>
        <div style={{ width:"2.5rem"}}>
          <LogoutIcon/>
        </div>
        {!toggleCollapse && (
          <span className={classNames('text-md font-medium text-primary')}>Logout</span>
        )}
      </div>
      <div></div>
    </div>
  )
}

export default Sideber