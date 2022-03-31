import micro from './micro.module.scss'

const HireDeveloperButton = () => {

    const onClick = (e: any) => {
        e.stopPropagation()
        alert('hire')
    }

    return <button onClick={onClick} className={micro.hiredeveloperbutton}>Hire Developer Now</button>
}

export default HireDeveloperButton