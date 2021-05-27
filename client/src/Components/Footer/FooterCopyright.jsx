import React              from 'react'
import { useTranslation } from 'react-i18next'

const FooterCopyright = () => {
  const { t } = useTranslation()
  return (
    <>
      <div style={{ textAlign: 'center', fontSize: '14px' }}>
        {t('copyright')}
      </div>
    </>
  )
}

export default FooterCopyright
