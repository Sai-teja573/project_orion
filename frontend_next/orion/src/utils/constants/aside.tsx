import { JSX } from "react"

type MenuOption = {
    title : string,
    icon : JSX.Element,
    urlKey : string,
    disabled ?: boolean
}

type MenuGroup = {
    title : string,
    options : MenuOption[]
}

export const ADMIN_ASIDE_OPTIONS : MenuGroup[] = [
    {
        title: 'Profile Setting',
        options: [
            {
                title: 'Profile',
                icon: <div className="h-4 w-4 my-auto bg-hover ml-10"/>,
                urlKey: 'profile',
                disabled: true
            },
            {
                title: 'Password',
                icon: <div className="h-4 w-4 my-auto bg-hover ml-10"/>,
                urlKey: 'password',
                disabled: true
            },
        ]
    },
    {
        title: 'User Access',
        options: [
            {
                title: 'Users',
                icon: <div className="h-4 w-4 my-auto bg-hover ml-10"/>,
                urlKey: 'users'
            },
            // {
            //     title: 'Group',
            //     icon: <div className="h-4 w-4 my-auto bg-hover ml-10"/>,
            //     urlKey: 'group',
            //     disabled: true
            // },
            // {
            //     title: 'User Role',
            //     icon: <div className="h-4 w-4 my-auto bg-hover ml-10"/>,
            //     urlKey: 'role',
            //     disabled: true
            // },
        ]
    },
    {
        title: 'Question',
        options: [
            {
                title: 'Problems',
                icon: <div className="h-4 w-4 my-auto bg-hover ml-10"/>,
                urlKey: 'problems',
                // disabled: true
            },
            {
                title: 'Tags',
                icon: <div className="h-4 w-4 my-auto bg-hover ml-10"/>,
                urlKey: 'tags'
            },
        ]
    },
    {
        title: 'Contest',
        options: [
            {
                title: 'Contests',
                icon: <div className="h-4 w-4 my-auto bg-hover ml-10"/>,
                urlKey: 'create',
                disabled: true
            },
            {
                title: 'LeaderBoard',
                icon: <div className="h-4 w-4 my-auto bg-hover ml-10"/>,
                urlKey: 'create',
                disabled: true
            },
        ]
    }
]