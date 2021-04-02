import { useEffect, useState }      from 'react'
import LANG_GENERAL_EN              from '../Translate/lang_EN/general_EN.json'
import LANG_GENERAL_FR              from '../Translate/lang_FR/general_FR.json'
import LANG_CARD_EN                 from '../Translate/lang_EN/Home/CardsHome_EN.json'
import LANG_CARD_FR                 from '../Translate/lang_FR/Home/CardsHome_FR.json'
import LANG_HOME_EN                 from '../Translate/lang_EN/Home/Home_EN.json'
import LANG_HOME_FR                 from '../Translate/lang_FR/Home/Home_FR.json'
import LANG_NAVBAR_FR               from '../Translate/lang_FR/Navbar/Navbar_FR.json'
import LANG_NAVBAR_EN               from '../Translate/lang_EN/Navbar/Navbar_EN.json'
import LANG_CONTACT_FR              from '../Translate/lang_FR/Contact/Contact_FR.json'
import LANG_CONTACT_EN              from '../Translate/lang_EN/Contact/Contact_EN.json'
import LANG_ORG_WEDDING_FR          from '../Translate/lang_FR/Organization/wedding_FR.json'
import LANG_ORG_WEDDING_EN          from '../Translate/lang_EN/Organization/weeding_EN.json'
import LANG_ORG_SECULARCEREMONY_FR  from '../Translate/lang_FR/Organization/secularCeremonie_FR.json'
import LANG_ORG_SECULARCEREMONY_EN  from '../Translate/lang_EN/Organization/secularCeremonie_EN.json'
import { changeLangPref }           from '../actions/authenticatorAction'
import { useDispatch, useSelector } from 'react-redux'

export default function useChangeLang () {
  const dispatch                        = useDispatch()
  const [langUserPref, setLangUserPref] = useState({})
  const langPref                        = useSelector(state => state.userReducers)
  const changeLanguage                  = (e) => {
    dispatch(changeLangPref(e.target.id))
  }
  
  const paramLang = window.location.href
  const langEN    = paramLang.split('http://localhost:3000')[1].includes('/en/')
  
  useEffect(() => {
    if (langPref.langPref === 'EN_en' || langEN) {
      setLangUserPref({
                        ...LANG_CARD_EN, ...LANG_HOME_EN, ...LANG_NAVBAR_EN,
                        ...LANG_CONTACT_EN, ...LANG_GENERAL_EN, ...LANG_ORG_WEDDING_EN, ...LANG_ORG_SECULARCEREMONY_EN
                      })
    } else {
      setLangUserPref({ ...LANG_CARD_FR, ...LANG_HOME_FR, ...LANG_NAVBAR_FR, ...LANG_CONTACT_FR, ...LANG_GENERAL_FR, ...LANG_ORG_WEDDING_FR, ...LANG_ORG_SECULARCEREMONY_FR })
    }
  }, [langPref])
  return [langUserPref, changeLanguage]
}
