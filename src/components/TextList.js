const TextList = ({ gifs }) => {
    const items = gifs.map((itemData) => {
        return <Item url={itemData.url} />;
    });
    return <div>{items}</div>
};

const Item = ({ url, title }) => {
    return (
        <div>
            <img src={url} alt={title} />
        </div>
    );
};

export default TextList;