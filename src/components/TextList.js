const TextList = ({ gifs }) => {
    const items = gifs.map((itemData) => {
        return <Item url={itemData.url} />;
    });
    return <div>{items}</div>
};

const Item = ({ url }) => {
    return (
        <div>
            <img src={url} />
        </div>
    );
};

export default TextList;