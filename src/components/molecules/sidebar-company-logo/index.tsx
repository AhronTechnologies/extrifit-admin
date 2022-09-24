import React from "react"

type SidebarCompanyLogoProps = {
  storeName?: string
}

const SidebarCompanyLogo: React.FC<SidebarCompanyLogoProps> = ({
  storeName,
}: SidebarCompanyLogoProps) => {
  return (
    <div className="flex items-center bg-grey-0 px-2.5 pb-6 w-full mb-4">
      <div className="w-[32px] h-[32px] flex items-center justify-center">
        <img src="https://ahron.cz/public/imgs/logo_mobile.svg" alt="" />
      </div>
      <span className="font-semibold ml-2.5">{storeName}</span>
    </div>
  )
}

export default SidebarCompanyLogo
