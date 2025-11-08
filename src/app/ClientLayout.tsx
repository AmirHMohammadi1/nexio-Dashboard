'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import PageChange from '@/components/PageChange/PageChange'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    // شبیه‌سازی رویدادهای router
    handleStart() // هنگام تغییر مسیر
    
    const timer = setTimeout(() => {
      handleComplete() // پس از تاخیر
    }, 1000)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <div id="page-transition">
        {loading && <PageChange path={pathname} />}
      </div>
      {children}
    </>
  )
}