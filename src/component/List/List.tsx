import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Image as Img, ImageDrawer } from '..';
import { updateSelectedImage } from '../../redux/actions/actions';
import { ISearchResItems } from '../../redux/reducer/reducer.types';
import { useTypedDispatch, useTypedSelector } from '../../redux/store';
import Loader from '../Loader/Loader';
import { ListProps } from './List.types';

const List: React.FC<ListProps> = ({ loading, setLoading }) => {
    const dispatch = useTypedDispatch();
    const { searchResult } = useTypedSelector((state) => state.app);
    const cover = searchResult?.items[searchResult?.items.length - 1]?.links?.find(i => i.rel === 'preview')?.href;
    const filteredItems: ISearchResItems[] | undefined = searchResult?.items?.filter((item: ISearchResItems) => !item?.links?.find(i => i.rel === 'preview')?.href.includes('.json'));
    const history = useNavigate();

    const openImageSummary = (item: ISearchResItems) => {
        dispatch(updateSelectedImage(item));
        history(`/summary/${item.data[0].nasa_id}`);
    }

    useEffect(() => {
        if (cover) {
            let image = new Image();
            image.src = cover;
            image.onload = () => setLoading(false);
        }
        dispatch(updateSelectedImage(null));
    }, [dispatch, cover])

    return loading ? (
        <Loader />
    ) : (
        <Container alignCenter>
            {
                filteredItems && filteredItems.length ?
                    filteredItems.map((item: ISearchResItems, idx: number) => {
                        let link = item?.links?.find(i => i.rel === 'preview');
                        let itemData = item.data[0];
                        return (
                            <Container inline imgContainer key={idx} onClick={() => openImageSummary(item)}>
                                <Img bgUrl={link?.href} />
                                <ImageDrawer>
                                    <h3 data-testid="item-list">{itemData?.title}</h3>
                                    {itemData?.photographer ? <span><strong>Photographer:</strong> {itemData?.photographer}</span> : null}
                                    {itemData?.photographer && itemData?.location ? <br /> : null}
                                    {itemData?.location ? <span><strong>Location:</strong> {itemData?.location}</span> : null}
                                </ImageDrawer>
                            </Container>
                        )
                    })
                    :
                    <Container>No data</Container>
            }
        </Container>
    )
}

export default List;
