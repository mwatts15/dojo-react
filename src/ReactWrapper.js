define([
    'react',
    './LikeButton'
], function(
    React,
    LikeButton
) {
    return function(clz) {
        class ReactWrapper extends React.Component {
            constructor(props) {
                super(props);
                this.myRef = React.createRef();
                this.dojoWidget = new clz(this.props);
            }

            componentDidMount() {
                this.dojoWidget.placeAt(this.myRef.current);
                this.dojoWidget.startup();
            }

            componentWillUnmount() {
                if (this.dojoWidget) {
                    this.dojoWidget.destroy(false);
                    this.dojoWidget = null;
                }
            }

            render() {
                return <div ref={this.myRef} />;
            }
        }
        return ReactWrapper;
    }
});
