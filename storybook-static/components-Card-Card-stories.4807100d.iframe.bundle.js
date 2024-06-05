'use strict';
(self.webpackChunkmercredi_patrick_ui_garden =
  self.webpackChunkmercredi_patrick_ui_garden || []).push([
  [513],
  {
    './src/components/Card/Card.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Card_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var _templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledCard = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    transition: 0.3s;\n    padding: 16px;\n    border-radius: 10px;\n    background-color: #20451c;\n    margin: 10px;\n    width: 50%;\n    opacity: ',
              ';\n    cursor: ',
              ';\n\n    @media (max-width: 600px) {\n        padding: 12px;\n        margin: 5px;\n    }\n',
            ])),
          (props) => (props.disabled ? 0.5 : 1),
          (props) => (props.disabled ? 'not-allowed' : 'pointer')
        ),
        Card = (_ref) => {
          let { children, disabled } = _ref;
          return (0, jsx_runtime.jsx)(StyledCard, { disabled, children });
        },
        Card_Card = Card;
      Card.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Card',
        props: {
          children: {
            required: !0,
            tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
            description: '',
          },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
          },
        },
      };
      const Card_stories = {
          title: 'Card',
          component: Card_Card,
          argTypes: { disabled: { control: 'boolean' } },
        },
        Default = Object.assign(
          ((args) =>
            (0, jsx_runtime.jsx)(Card_Card, {
              ...args,
              children: (0, jsx_runtime.jsx)('p', {
                children: 'This is a card',
              }),
            })).bind({}),
          { args: { disabled: !1 } }
        );
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              'Object.assign(Template.bind({}), {\n  args: {\n    disabled: false\n  }\n})',
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ['Default'];
    },
  },
]);
