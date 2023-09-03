// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: "选择关联issue前缀（可选）:",
      customFooterPrefix: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?",
    },
    types: [
      {
        value: "新增功能✨",
        name: "新增功能:✨     例如增加了一个新的页面、组件、接口",
      },
      {
        value: "修复缺陷🪲",
        name: "修复缺陷:🪲      例如修复了一个崩溃，逻辑错误，样式问题。",
      },
      {
        value: "文档更新📝",
        name: "文档更新:📝     例如添加了注释，修改了README文件，API文档",
      },
      {
        value: "代码格式💄",
        name: "代码格式:💄     例如调整了缩进，空格，换行，或者括号",
      },
      {
        value: "代码重构♻️",
        name: "代码重构:♻️      例如提取了函数，合并了两个类，或者移动了文件",
      },
      {
        value: "性能提升⚡️",
        name: "性能提升:⚡     ️例如减少了内存占用，提高了运行速度，或者减少了网络请求",
      },
      {
        value: "持续集成🎡",
        name: "持续集成:🎡     例如添加了一个测试用例，修改了一个构建脚本，或者更新了一个依赖库",
      },
      {
        value: "回退代码🔙",
        name: "回退代码:🔙     撤销了之前的一次或多次提交",
      },
      {
        value: "其他修改🧹",
        name: "其他修改:🧹     例如修改了一些配置文件，删除了一些无用的代码，或者添加了一些日志。",
      },
      {
        value: "合并分支🎋",
        name: "合并分支:🎋     合并了两个或多个分支的代码",
      },
    ],
    // 是否使用Emoji
    useEmoji: false,
    emojiAlign: "center",
    useAI: false,
    aiNumber: 1,
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixes: [
      // 如果使用 gitee 作为开发管理
      { value: "link", name: "link:     链接 ISSUES 进行中" },
      { value: "closed", name: "closed:   标记 ISSUES 已完成" },
    ],
    customIssuePrefixAlign: "top",
    emptyIssuePrefixAlias: "skip",
    customIssuePrefixAlias: "custom",
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: "",
  },
};
