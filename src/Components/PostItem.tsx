import {IPost} from "../Hooks/usePosts";
import {IUser} from "../Hooks/useUsers";

export type IProps = {
    post: IPost;
    onGetUser: (id: number) => IUser | undefined;
}

const PostItem = (props: IProps) => {
    const {onGetUser, post} = props
    const user = onGetUser(post.userId);

    console.log(post.id, 'user', user)

    const getUserInfo = () => {
        if (!user)
            return <></>
        return (
            <div className='user-block'>
                <div className="user-name">Имя юзера: {user.name}</div>
                <div className="user-phone">Телефон: {user.phone}</div>
                <div className="user-phone">Email: {user.email}</div>
            </div>
        )
    }

    return <div className="post-item">
        <div className="title">{post.title}</div>
        <div className="body">{post.body}</div>
        {getUserInfo()}
    </div>;
}

export default PostItem;