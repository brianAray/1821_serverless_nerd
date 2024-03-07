import React from 'react'
import AccountDetailView from './AccountDetailView'

function AccountContainer(props: any) {

  return (
    <AccountDetailView user={props.user}/>
  )
}

export default AccountContainer