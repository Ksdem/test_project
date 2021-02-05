import React, {useState} from "react";
import usePosts, {IPost} from "../Hooks/usePosts";

export type IField = {
    title: string;
    value: any;
    valueKey: string;
    isDisabled: boolean;
    onChange: (key: string, value: any) => void;
}

function Field(props: IField) {
    return <div className="field">
        <div className="label">{props.title}</div>
        <div className="label">{props.valueKey}</div>
        <input type="text"
               disabled={props.isDisabled}
               value={props.value === 0 ? '' : props.value}
               onChange={(event) => props.onChange(props.valueKey, event.target.value)}/>
    </div>;
}

const NewPost = () => {
    const {addPost, isLoading} = usePosts();
    const [post, setPost] = useState(
        {
            body: '',
            userId: 0,
            title: ''
        } as IPost
    )

    const onChangeHandler = (key: string, value: any) => {
        setPost(prevState => {
            return {...prevState, [key]: value}
        })
    }

    const onClickHandler = async () => {
        await addPost(post);
        setPost(
            {
                body: '',
                userId: 0,
                title: '',
                id: 0
            }
        )
    }

    return (
        <div className="new-post">
            <div className="new-post-wrapper">
                <Field title={'Заголовок'} isDisabled={isLoading} value={post.title} valueKey={'title'} onChange={onChangeHandler}/>
                <Field title={'Описание'} isDisabled={isLoading} value={post.body} valueKey={'body'} onChange={onChangeHandler}/>
                <Field title={'Айди пользователя'} isDisabled={isLoading} value={post.userId} valueKey={'userId'} onChange={onChangeHandler}/>
                <button onClick={onClickHandler} disabled={isLoading}>ADD POST</button>
            </div>
        </div>);
}


export default NewPost;