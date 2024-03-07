import React from 'react'

function AccountDetailView(props: any) {
  return (
    <>
        {props.user && <p>{props.user.name}</p>}
    </>
  )
}

export default AccountDetailView