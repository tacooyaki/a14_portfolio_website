'use strict';
(self.webpackChunkmercredi_patrick_ui_garden =
  self.webpackChunkmercredi_patrick_ui_garden || []).push([
  [721],
  {
    './src/components/Button/Button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Button_stories,
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
      const StyledButton = styled_components_browser_esm.Ay.button(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n    padding: 10px 20px;\n    background-color: blue;\n    color: white;\n    border: none;\n    cursor: pointer;\n    font-size: calc(10px + 0.5vw);\n    transition: background-color 0.3s, transform 0.2s;\n\n    &:hover {\n        background-color: lightblue;\n    }\n\n    &:active {\n        background-color: darkblue;\n        transform: scale(0.98);\n    }\n\n    &:disabled {\n        background-color: grey;\n        cursor: not-allowed;\n    }\n\n    @media (max-width: 768px) {\n        padding: 8px 15px;\n    }\n',
            ]))
        ),
        Button = (_ref) => {
          let { disabled, label, onClick } = _ref;
          return (0, jsx_runtime.jsx)(StyledButton, {
            disabled,
            onClick,
            children: label,
          });
        },
        Button_Button = Button;
      Button.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Button',
        props: {
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
          },
          label: { required: !0, tsType: { name: 'string' }, description: '' },
          onClick: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
          },
        },
      };
      const Button_stories = { title: 'Button', component: Button_Button },
        Primary = Object.assign(
          ((args) => (0, jsx_runtime.jsx)(Button_Button, { ...args })).bind({}),
          { args: { label: 'Click me' } }
        );
      Primary.parameters = {
        ...Primary.parameters,
        docs: {
          ...Primary.parameters?.docs,
          source: {
            originalSource:
              "Object.assign(Template.bind({}), {\n  args: {\n    label: 'Click me'\n  }\n})",
            ...Primary.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ['Primary'];
    },
  },
]);
