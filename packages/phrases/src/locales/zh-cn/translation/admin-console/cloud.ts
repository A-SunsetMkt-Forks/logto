const cloud = {
  general: {
    onboarding: '入门',
  },
  create_tenant: {
    page_title: '创建租户',
    title: '创建你的第一个租户',
    description: '租户是一个隔离的环境，你可以在其中管理用户身份、应用程序和所有其他 Logto 资源。',
    invite_collaborators: '通过电子邮件邀请你的合作者',
  },
  social_callback: {
    title: '你已成功登录',
    description:
      '你已成功使用社交账户登录。为确保与 Logto 的无缝集成并获得所有功能的访问权限，我们建议你继续配置自己的社交连接器。',
    notice:
      '请避免将演示连接器用于生产目的。一旦你完成测试，请删除演示连接器，并使用你的凭证设置你自己的连接器。',
  },
  tenant: {
    create_tenant: '创建租户',
  },
};

export default Object.freeze(cloud);
