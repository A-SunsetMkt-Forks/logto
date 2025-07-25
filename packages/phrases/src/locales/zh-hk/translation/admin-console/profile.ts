const profile = {
  page_title: '賬戶管理',
  title: '賬戶管理',
  description: '在這裡，你可以修改賬戶設置和管理個人信息，以確保賬戶安全。',
  settings: {
    title: '賬戶設置',
    profile_information: '個人信息',
    avatar: '頭像',
    name: '姓名',
    username: '用戶名',
  },
  link_account: {
    title: '關聯賬戶',
    email_sign_in: '郵件登錄',
    email: '郵件',
    social_sign_in: '社交賬號登錄',
    link_email: '綁定郵箱',
    link_email_subtitle: '綁定郵箱以便登錄或幫助恢復賬戶。',
    email_required: '郵箱不能為空',
    invalid_email: '無效的郵箱地址',
    identical_email_address: '輸入的郵箱地址與當前郵箱地址相同',
    anonymous: '匿名',
  },
  password: {
    title: '密碼與安全',
    password: '密碼',
    password_setting: '密碼設置',
    new_password: '新密碼',
    confirm_password: '確認密碼',
    enter_password: '輸入當前密碼',
    enter_password_subtitle: '為確保帳戶安全，在修改密碼前，請先輸入當前密碼以通過身份驗證。',
    set_password: '設置密碼',
    verify_via_password: '通過密碼驗證',
    show_password: '顯示密碼',
    required: '密碼不能為空',
    do_not_match: '密碼不匹配，請重新輸入。',
  },
  code: {
    enter_verification_code: '輸入驗證碼',
    enter_verification_code_subtitle: '驗證碼已發送至 <strong>{{target}}</strong>',
    verify_via_code: '通過郵箱驗證碼驗證',
    resend: '重新發送驗證碼',
    resend_countdown: '在 {{countdown}} 秒後重新發送',
  },
  delete_account: {
    title: '刪除賬戶',
    label: '刪除賬戶',
    description: '刪除賬戶將會刪除所有個人信息、用戶數據和配置。此操作無法撤銷。',
    button: '刪除賬戶',
    p: {
      has_issue: '很抱歉聽到你想刪除你的賬戶。在刪除賬戶之前，你需要解決以下問題。',
      after_resolved: '一旦你解決了這些問題，你就可以刪除賬戶了。如需任何幫助，請隨時聯繫我們。',
      check_information: '很抱歉聽到你想刪除你的賬戶。請在繼續操作前仔細檢查以下信息。',
      remove_all_data:
        '刪除賬戶將會永久刪除你在 Logto Cloud 的所有數據。因此，請確保在繼續操作前備份所有重要數據。',
      confirm_information: '請確認上述信息是否符合你的預期。一旦刪除賬戶，我們將無法恢復。',
      has_admin_role: '由於你是以下租戶的管理員，這些租戶將與你的賬戶一起被刪除：',
      has_admin_role_other: '由於你是以下租戶的管理員，這些租戶將與你的賬戶一起被刪除：',
      quit_tenant: '你將退出以下租戶：',
      quit_tenant_other: '你將退出以下租戶：',
    },
    issues: {
      paid_plan: '以下租戶有付費計劃，請先取消訂閱：',
      paid_plan_other: '以下租戶有付費計劃，請先取消訂閱：',
      subscription_status: '以下租戶有訂閱狀態問題：',
      subscription_status_other: '以下租戶有訂閱狀態問題：',
      open_invoice: '以下租戶有未結發票：',
      open_invoice_other: '以下租戶有未結發票：',
    },
    error_occurred: '發生錯誤',
    error_occurred_description: '抱歉，刪除賬戶時出現問題：',
    request_id: '請求 ID：{{requestId}}',
    try_again_later: '請稍後再試。如果問題仍然存在，請聯繫 Logto 團隊並提供請求 ID。',
    final_confirmation: '最終確認',
    about_to_start_deletion: '你即將開始刪除過程，這一操作無法撤銷。',
    permanently_delete: '永久刪除',
  },
  set: '設置',
  change: '修改',
  link: '關聯',
  unlink: '取消關聯',
  not_set: '未設置',
  change_avatar: '修改頭像',
  change_name: '修改姓名',
  change_username: '修改用戶名',
  set_name: '設置姓名',
  email_changed: '已成功綁定郵箱。',
  password_changed: '已重置密碼。',
  updated: '{{target}}更改成功。',
  linked: '{{target}}賬號綁定成功。',
  unlinked: '{{target}}賬號解綁成功。',
  email_exists_reminder: '該郵箱 {{email}} 已被其他賬號綁定，請更換郵箱。',
  unlink_confirm_text: '確定解綁',
  unlink_reminder: '解綁後，用戶將無法使用該 <span></span> 賬號進行登錄。確定要解綁嗎？',
  fields: {
    /** UNTRANSLATED */
    name: 'Name',
    /** UNTRANSLATED */
    name_description:
      "The user's full name in displayable form including all name parts (e.g., “Jane Doe”).",
    /** UNTRANSLATED */
    avatar: 'Avatar',
    /** UNTRANSLATED */
    avatar_description: "URL of the user's avatar image.",
    /** UNTRANSLATED */
    familyName: 'Family name',
    /** UNTRANSLATED */
    familyName_description: 'The user\'s surname(s) or last name(s) (e.g., "Doe").',
    /** UNTRANSLATED */
    givenName: 'Given name',
    /** UNTRANSLATED */
    givenName_description: 'The user\'s given name(s) or first name(s) (e.g., "Jane").',
    /** UNTRANSLATED */
    middleName: 'Middle name',
    /** UNTRANSLATED */
    middleName_description: 'The user\'s middle name(s) (e.g., "Marie").',
    /** UNTRANSLATED */
    nickname: 'Nickname',
    /** UNTRANSLATED */
    nickname_description:
      'Casual or familiar name for the user, which may differ from their legal name.',
    /** UNTRANSLATED */
    preferredUsername: 'Preferred username',
    /** UNTRANSLATED */
    preferredUsername_description:
      'Shorthand identifier by which the user wishes to be referenced.',
    /** UNTRANSLATED */
    profile: 'Profile',
    /** UNTRANSLATED */
    profile_description:
      "URL of the user's human-readable profile page (e.g., social media profile).",
    /** UNTRANSLATED */
    website: 'Website',
    /** UNTRANSLATED */
    website_description: "URL of the user's personal website or blog.",
    /** UNTRANSLATED */
    gender: 'Gender',
    /** UNTRANSLATED */
    gender_description: 'The user\'s self-identified gender (e.g., "Female", "Male", "Non-binary")',
    /** UNTRANSLATED */
    birthdate: 'Birthdate',
    /** UNTRANSLATED */
    birthdate_description: 'The user\'s date of birth in a specified format (e.g., "MM-dd-yyyy").',
    /** UNTRANSLATED */
    zoneinfo: 'Timezone',
    /** UNTRANSLATED */
    zoneinfo_description:
      'The user\'s timezone in IANA format (e.g., "America/New_York" or "Europe/Paris").',
    /** UNTRANSLATED */
    locale: 'Language',
    /** UNTRANSLATED */
    locale_description: 'The user\'s language in IETF BCP 47 format (e.g., "en-US" or "zh-CN").',
    address: {
      /** UNTRANSLATED */
      formatted: 'Address',
      /** UNTRANSLATED */
      streetAddress: 'Street address',
      /** UNTRANSLATED */
      locality: 'City',
      /** UNTRANSLATED */
      region: 'State',
      /** UNTRANSLATED */
      postalCode: 'Zip code',
      /** UNTRANSLATED */
      country: 'Country',
    },
    /** UNTRANSLATED */
    address_description:
      'The user\'s full address in displayable form including all address parts (e.g., "123 Main St, Anytown, USA 12345").',
    /** UNTRANSLATED */
    fullname: 'Fullname',
    /** UNTRANSLATED */
    fullname_description:
      'Flexibly combines familyName, givenName, and middleName based on configuration.',
  },
};

export default Object.freeze(profile);
