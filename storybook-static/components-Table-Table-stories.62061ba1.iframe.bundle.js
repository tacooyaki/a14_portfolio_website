'use strict';
(self.webpackChunkmercredi_patrick_ui_garden =
  self.webpackChunkmercredi_patrick_ui_garden || []).push([
  [623],
  {
    './src/components/Table/Table.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Table_stories,
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
      const StyledTable = styled_components_browser_esm.Ay.table(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n    width: 100%;\n    border-collapse: collapse;\n    opacity: ',
              ';\n    cursor: ',
              ';\n',
            ])),
          (props) => (props.disabled ? 0.5 : 1),
          (props) => (props.disabled ? 'not-allowed' : 'default')
        ),
        Table = (_ref) => {
          let { children, disabled } = _ref;
          return (0, jsx_runtime.jsx)(StyledTable, { disabled, children });
        },
        Table_Table = Table;
      var TableHeader_templateObject;
      Table.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Table',
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
      const StyledHeader = styled_components_browser_esm.Ay.thead(
          TableHeader_templateObject ||
            (TableHeader_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  opacity: ',
              ';\n  cursor: ',
              ';\n',
            ])),
          (props) => (props.disabled ? 0.5 : 1),
          (props) => (props.disabled ? 'not-allowed' : 'default')
        ),
        TableHeader = (_ref) => {
          let { children, disabled } = _ref;
          return (0, jsx_runtime.jsx)(StyledHeader, { disabled, children });
        },
        Table_TableHeader = TableHeader;
      var TableRow_templateObject;
      TableHeader.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableHeader',
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
      const StyledRow = styled_components_browser_esm.Ay.tr(
          TableRow_templateObject ||
            (TableRow_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  opacity: ',
              ';\n  cursor: ',
              ';\n',
            ])),
          (props) => (props.disabled ? 0.5 : 1),
          (props) => (props.disabled ? 'not-allowed' : 'default')
        ),
        TableRow = (_ref) => {
          let { children, disabled } = _ref;
          return (0, jsx_runtime.jsx)(StyledRow, { disabled, children });
        },
        Table_TableRow = TableRow;
      var TableCell_templateObject;
      TableRow.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableRow',
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
      const StyledCell = styled_components_browser_esm.Ay.td(
          TableCell_templateObject ||
            (TableCell_templateObject = (0, taggedTemplateLiteral.A)([
              '\n    padding: 8px;\n    border: 1px solid #ccc;\n    text-align: ',
              ';\n    opacity: ',
              ';\n    cursor: ',
              ';\n',
            ])),
          (props) => props.align || 'left',
          (props) => (props.disabled ? 0.5 : 1),
          (props) => (props.disabled ? 'not-allowed' : 'default')
        ),
        TableCell = (_ref) => {
          let { children, align, disabled } = _ref;
          return (0, jsx_runtime.jsx)(StyledCell, {
            align,
            disabled,
            children,
          });
        },
        Table_TableCell = TableCell;
      var TableFooter_templateObject;
      TableCell.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableCell',
        props: {
          children: {
            required: !0,
            tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
            description: '',
          },
          align: {
            required: !1,
            tsType: {
              name: 'union',
              raw: "'left' | 'right' | 'center'",
              elements: [
                { name: 'literal', value: "'left'" },
                { name: 'literal', value: "'right'" },
                { name: 'literal', value: "'center'" },
              ],
            },
            description: '',
          },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
          },
        },
      };
      const StyledFooter = styled_components_browser_esm.Ay.tfoot(
          TableFooter_templateObject ||
            (TableFooter_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  opacity: ',
              ';\n  cursor: ',
              ';\n',
            ])),
          (props) => (props.disabled ? 0.5 : 1),
          (props) => (props.disabled ? 'not-allowed' : 'default')
        ),
        TableFooter = (_ref) => {
          let { children, disabled } = _ref;
          return (0, jsx_runtime.jsx)(StyledFooter, { disabled, children });
        },
        Table_TableFooter = TableFooter;
      TableFooter.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableFooter',
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
      const Table_stories = {
          title: 'Table',
          component: Table_Table,
          subcomponents: {
            TableHeader: Table_TableHeader,
            TableRow: Table_TableRow,
            TableCell: Table_TableCell,
            TableFooter: Table_TableFooter,
          },
          argTypes: { disabled: { control: 'boolean' } },
        },
        Default = Object.assign(
          ((args) =>
            (0, jsx_runtime.jsxs)(Table_Table, {
              ...args,
              children: [
                (0, jsx_runtime.jsx)(Table_TableHeader, {
                  disabled: args.disabled,
                  children: (0, jsx_runtime.jsxs)(Table_TableRow, {
                    disabled: args.disabled,
                    children: [
                      (0, jsx_runtime.jsx)(Table_TableCell, {
                        disabled: args.disabled,
                        children: 'Header 1',
                      }),
                      (0, jsx_runtime.jsx)(Table_TableCell, {
                        disabled: args.disabled,
                        children: 'Header 2',
                      }),
                      (0, jsx_runtime.jsx)(Table_TableCell, {
                        disabled: args.disabled,
                        children: 'Header 3',
                      }),
                    ],
                  }),
                }),
                (0, jsx_runtime.jsxs)('tbody', {
                  children: [
                    (0, jsx_runtime.jsxs)(Table_TableRow, {
                      disabled: args.disabled,
                      children: [
                        (0, jsx_runtime.jsx)(Table_TableCell, {
                          disabled: args.disabled,
                          children: 'Data 1',
                        }),
                        (0, jsx_runtime.jsx)(Table_TableCell, {
                          disabled: args.disabled,
                          children: 'Data 2',
                        }),
                        (0, jsx_runtime.jsx)(Table_TableCell, {
                          disabled: args.disabled,
                          children: 'Data 3',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(Table_TableRow, {
                      disabled: args.disabled,
                      children: [
                        (0, jsx_runtime.jsx)(Table_TableCell, {
                          disabled: args.disabled,
                          children: 'Data 4',
                        }),
                        (0, jsx_runtime.jsx)(Table_TableCell, {
                          disabled: args.disabled,
                          children: 'Data 5',
                        }),
                        (0, jsx_runtime.jsx)(Table_TableCell, {
                          disabled: args.disabled,
                          children: 'Data 6',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Table_TableFooter, {
                  disabled: args.disabled,
                  children: (0, jsx_runtime.jsxs)(Table_TableRow, {
                    disabled: args.disabled,
                    children: [
                      (0, jsx_runtime.jsx)(Table_TableCell, {
                        disabled: args.disabled,
                        children: 'Footer 1',
                      }),
                      (0, jsx_runtime.jsx)(Table_TableCell, {
                        disabled: args.disabled,
                        children: 'Footer 2',
                      }),
                      (0, jsx_runtime.jsx)(Table_TableCell, {
                        disabled: args.disabled,
                        children: 'Footer 3',
                      }),
                    ],
                  }),
                }),
              ],
            })).bind({}),
          { args: { disabled: !1 } }
        );
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              'Object.assign(Template.bind({}), {\n  args: {\n    disabled: false // Default state\n  }\n})',
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ['Default'];
    },
  },
]);
