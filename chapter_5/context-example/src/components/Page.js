import React from 'react'

/*****************************
 *** Inversion of Control ***
*****************************/

const Page = ({ headerColor }) => {
  const profile = (
    <Profile>
      <Avatar headerColor={headerColor} />
    </Profile>
  )

  return (
    <Header headerColor={headerColor} profile={profile} />
  )
}

const Profile = ({ children }) => (
  <div style={{ backgroundColor: 'lime', padding: '5px 20px' }}>
    <h2>Profile</h2>
    {children}
  </div>
)

const Avatar = ({ headerColor }) => (
  <div style={{ background: headerColor, padding: 20 }}>
    <img
      src='https://api.adorable.io/avatars/150/abott@adorable.png'
      alt="Avatar"
    />
  </div>
)

const Header = ({ headerColor, profile }) => (
  <header style={{ background: headerColor }}>
    {profile}
  </header>
)

export default Page

// Passing down props can be avoided with Inversion of Control pattern.
// The rendered component is passed down Instead of the data.
// Page becomes the only component that has to know about headerColor and there
// is no need to pass it further in the tree.
// This pattern should be used with caution though, as it raises the higher
// leval component complexity.

/**********************
 *** Prop Drilling ***
***********************/

// const Page = ({ headerColor }) => (
//   <Header headerColor={headerColor} />
// )

// const Header = ({ headerColor }) => (
//   <header style={{ background: headerColor }}>
//     <Profile headerColor={headerColor} />
//   </header>
// )

// const Profile = ({ headerColor }) => (
//   <div style={{ backgroundColor: 'lime', padding: '5px 20px' }}>
//     <h2>Profile</h2>
//     <Avatar headerColor={headerColor} />
//   </div>
// )

// const Avatar = ({ headerColor }) => (
//   <div style={{ background: headerColor, padding: 20 }}>
//     <img
//       src='https://api.adorable.io/avatars/150/abott@adorable.png'
//       alt="Avatar"
//     />
//   </div>
// )

// export default Page
