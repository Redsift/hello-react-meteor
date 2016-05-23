import { mount } from 'react-mounter';

FlowRouter.route("/", {
  name: "home",
  action() {
    mount(BlogLayout, {
      content: <PostList />
    });
  }
});

FlowRouter.route('/post/:_id', {
  name: 'post',
  action(params) {
    mount(BlogLayout, {
      content: <PostPage _id={params._id} />
    });
  }
});
