
const SideBarMenuItem = ({Text, Icon, active}) => {
  return (
    <div className="hoverEffect  m-auto text-gray-700  flex items-center justify-center xl:justify-start text-lg space-x-3">
        <Icon className='h-7'/>
        <span className={`${active && 'font-bold'} hidden xl:inline`}>{Text}</span>
    </div>
  )
}

export default SideBarMenuItem