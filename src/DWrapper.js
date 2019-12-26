/* Wrapper around React components for dojo */
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'react',
    'react-dom',
], function(
    declare,
    _WidgetBase,
    React,
    ReactDOM
) {
    return function (clz) {
        return declare('markw.DWrapper_' + clz.name, [_WidgetBase], {
            baseClass:  'dwrapper_' + clz.name,
            constructor () {
                this.rElement = React.createElement(clz);
                Object.defineProperties(this, {
                    reactState: {
                        get: function () {
                            return this.rComponent.state;
                        }
                    }
                });
            },

            buildRendering() {
                this.inherited(arguments);
                this.rComponent = ReactDOM.render(this.rElement, this.domNode);
            },

            setReactState(args) {
                return this.rComponent.setState(args);
            },

            destroy() {
                this.inherited(arguments);
                try {
                    this.rComponent.componentWillUnmount();
                } catch (e) {
                    console.error("Error while unmounting component");
                }
            }
        });
    };
});
