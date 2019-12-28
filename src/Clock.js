define([
    'react',
    './LikeButton',
    './RCalendar'
], function(
    React,
    LikeButton,
    RCalendar
) {
    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {date: new Date(),
                          show_clock: true};
        }

        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {
            this.setState({date: new Date()});
        }

        render() {
            if (this.state.show_clock) {
                return (
                    <div className="oh-hello">
                        <h1>Hello, world!</h1>
                        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                        <RCalendar />
                    </div>
                );
            } else {
                return null;
            }
        }
    }
    return Clock;
});
