const Footer = () => {
    return (
        <div className="w-full justify-center items-center flex">
        <hr />
        <span className="font-semibold text-lg">
            © {new Date().getFullYear()}
        </span>
        <div className="p-2">
        <h3 className="text-lg font-semibold">Time Capsule</h3>
        </div>
        </div>
    )
}
export default Footer
