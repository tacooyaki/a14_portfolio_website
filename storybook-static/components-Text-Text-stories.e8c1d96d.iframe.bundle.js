'use strict';
(self.webpackChunkmercredi_patrick_ui_garden =
  self.webpackChunkmercredi_patrick_ui_garden || []).push([
  [103],
  {
    './src/components/Text/Text.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Text_stories,
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
      const StyledText = styled_components_browser_esm.Ay.p(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n    color: black;\n    font-size: 14px;\n    opacity: ',
              ';\n    cursor: ',
              ';\n',
            ])),
          (props) => (props.disabled ? 0.5 : 1),
          (props) => (props.disabled ? 'not-allowed' : 'text')
        ),
        Text = (_ref) => {
          let { content, disabled } = _ref;
          return (0, jsx_runtime.jsx)(StyledText, {
            disabled,
            children: content,
          });
        },
        Text_Text = Text;
      Text.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Text',
        props: {
          content: {
            required: !0,
            tsType: { name: 'string' },
            description: '',
          },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
          },
        },
      };
      const Text_stories = {
          title: 'Text',
          component: Text_Text,
          argTypes: { disabled: { control: 'boolean' } },
        },
        Default = Object.assign(
          ((args) => (0, jsx_runtime.jsx)(Text_Text, { ...args })).bind({}),
          { args: { content: 'Sample text content', disabled: !1 } }
        );
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "Object.assign(Template.bind({}), {\n  args: {\n    content: 'Sample text content',\n    disabled: false // Default state\n  }\n})",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ['Default'];
    },
  },
]);
