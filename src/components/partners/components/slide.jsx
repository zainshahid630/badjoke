const Slide = ({ background, image }) => {
    return (
        <div className="slide-partner" style={{ background }}>
            <img src={image} alt="" />
        </div>
    )
}

export default Slide