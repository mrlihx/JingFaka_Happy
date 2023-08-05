/*
Navicat MySQL Data Transfer

Source Server         : 阿里Faka空DB
Source Server Version : 50650
Source Host           : 39.103.228.76:3306
Source Database       : faka_db_demo

Target Server Type    : MYSQL
Target Server Version : 50650
File Encoding         : 65001

Date: 2022-03-04 00:02:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for announce_log
-- ----------------------------
DROP TABLE IF EXISTS `announce_log`;
CREATE TABLE `announce_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户ID',
  `article_id` int(11) NOT NULL DEFAULT '0' COMMENT '公告ID',
  `create_at` int(11) NOT NULL DEFAULT '0' COMMENT '阅读时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of announce_log
-- ----------------------------

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cate_id` int(10) unsigned NOT NULL DEFAULT '0',
  `title` varchar(50) NOT NULL DEFAULT '',
  `title_img` varchar(255) NOT NULL DEFAULT '' COMMENT '标题图',
  `description` text NOT NULL COMMENT '文章描述',
  `content` text NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `views` int(10) unsigned NOT NULL DEFAULT '0',
  `create_at` int(10) unsigned NOT NULL,
  `update_at` int(10) unsigned NOT NULL DEFAULT '0',
  `is_system` tinyint(4) NOT NULL DEFAULT '0' COMMENT '1表示系统调用到的页面，禁止删除',
  `top` int(10) NOT NULL DEFAULT '0' COMMENT '置顶时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('4', '2', '1.怎么入驻自动发卡平台,成为商户?', '', '', '&lt;p&gt;通过平台的账户注册功能，即可免费入驻自动发卡平台。&lt;/p&gt;\n\n&lt;p&gt;注册完成后，请将收款信息设置好。&lt;/p&gt;\n', '1', '1', '1607699078', '0', '0', '0');
INSERT INTO `article` VALUES ('5', '2', '2.怎么登录自动发卡平台商户后台?', '', '', '&lt;p&gt;点此右上角“登录”按钮进入&lt;/p&gt;\n', '1', '1', '1607699069', '0', '0', '0');
INSERT INTO `article` VALUES ('6', '2', '3.怎么用自动发卡平台销售虚拟商品？', '', '', '&lt;p&gt;商户通过后台可以添加商品，每个商品自动发卡平台都会分配一个购买链接，商户只要将这个链接发送给买家，买家付款后平台自动发货，即可完成交易。&lt;/p&gt;\n', '1', '1', '1607699063', '0', '0', '0');
INSERT INTO `article` VALUES ('7', '2', '4.自动发卡平台可以卖些什么？', '', '', '&lt;p&gt;虚拟商品(例如软件注册码，论坛帐号，卡密商品，等等,（不能出售法律不允许的商品）&lt;/p&gt;\n', '1', '1', '1607699054', '0', '0', '0');
INSERT INTO `article` VALUES ('8', '2', '5.自动发卡平台账户的金额满多少自动结算？', '', '', '&lt;p&gt;商户账户金额满10元，手工提现，满100元凌晨1点系统自动帮您提交提现，财务将于第二天12点前结算到您预留的账户，&lt;/p&gt;\n', '1', '1', '1607699048', '0', '0', '0');
INSERT INTO `article` VALUES ('9', '2', '6.自动发卡平台财务结算商户方式有那些？', '', '', '&lt;p&gt;支持支付宝、微信、请商户后台设置好提现账号并上传收款码即可。&lt;/p&gt;\n', '1', '1', '1607699038', '0', '0', '0');
INSERT INTO `article` VALUES ('10', '2', '7.如果买家已经付款,但是他说没有收到卡密该怎么办？', '', '', '&lt;p&gt;可以发给客户卡密查询地址&lt;br /&gt;\n或者让客户联系自动发卡平台客服协助查询。&lt;/p&gt;\n', '1', '1', '1607699289', '0', '0', '0');
INSERT INTO `article` VALUES ('11', '2', '8.自动发卡网安全吗？', '', '', '&lt;p&gt;非常安全，自动发卡平台运用先进的安全技术保护用户在250自动发卡平台账户中存储的个人信息、账户信息以及交易记录的安全。自动发卡平台拥有完善的全监测系统，可以及时发现网站的非正常访问并做相应的安全响应。重金采用高防服务器。让您用着:安全，放心。&lt;/p&gt;\n', '1', '1', '1607699030', '0', '0', '0');
INSERT INTO `article` VALUES ('13', '3', '注册协议', '', '', '&lt;p&gt;本网站在国家相关法律法规规定的范围内，只按现有状况提供软件注册码在线交易第三方网络平台服务，本网站及其所有者非交易一方，也非交易任何一方之代理人或代表;同时， 本网站及其所有者也未授权任何人代表或代理本网站及其所有者从事任何网络交易行为或做出任何承诺、保证或其他类似行为，除非有明确的书面授权。&lt;/p&gt;\r\n\r\n&lt;p&gt;鉴于互联网及网络交易的特殊性，本网站无法鉴别和判断相关交易各主体之民事权利和行为能力、资质、信用等状况，也无法鉴别和判断虚拟交易或正在交易或已交易虚拟物品来源 、权属、真伪、性能、规格、质量、数量等权利属性、自然属性及其他各种状况。因此，交易各方在交易前应加以仔细辨明，并慎重考虑和评估交易可能产生的各项风险。&lt;/p&gt;\r\n\r\n&lt;p&gt;本网站不希望出现任何因虚拟物品交易而在用户之间及用户与游戏开发运营商之间产生纠纷，但并不保证不发生该类纠纷。对于因前述各类情形而产生的任何纠纷，将由交易各方依 据中华人民共和国现行的有关法律通过适当的方式直接加以解决，本网站及其所有者不参与其中；对于因此类交易而产生的各类纠纷之任何责任和后果，由交易各方承担，本网站及其所有者不承担任何责任及后果。&lt;/p&gt;\r\n\r\n&lt;p&gt;本网站不希望出现任何人利用本网站或因使用本网站而侵犯他人合法权益的行为，但并不保证不会发生此类行为或类似行为。本网站将依据中国法律采取必要的措施防止发生前述各类行为或降低发生这类行为的可能性或者降低由此造成的损失及其后果。对于因前述各类情形而产生的任何纠纷，将由权利受到侵害之人和侵权方依据中华人民共和国现行的有关法律通过适当的方式直接加以 解决，本网站及其所有者不参与其中；对于因此类行为产生的各类纠纷之任何责任和后果，由相关责任方承担，本网站及其所有者不承担任何责任及后果。&lt;/p&gt;\r\n\r\n&lt;p&gt;凡有客户投诉涉及不正常交易或疑似诈骗的帐户，公司有权冻结相应帐户。请相应帐户持有人于冻结之日起30日内提供相应证明材料证明交易的真实性或投诉不属实。在相应时间内 未提供材料或材料审核未通过的，公司有权进行帐户相应款项退回处理。&lt;/p&gt;\r\n\r\n&lt;p&gt;任何非本网站责任而产生的任何其他纠纷，概由纠纷各方依据中国相关法律以适当的方式直接加以解决，本网站不参与其中；对于因该类行为产生的各类纠纷之任何责任和后果，由相关各方承担，本网站及其所有者不承担任何责任及后果。&lt;/p&gt;\r\n', '1', '1', '1531535375', '0', '1', '0');
INSERT INTO `article` VALUES ('15', '3', '用户协议', '', '', '&lt;p&gt;自动发卡网禁止出售涉、黄、赌、毒、抽奖类、诈骗类、公民身份信息、任何实名制账号如微信支付宝、QQ刷赞、卡盟QQ钻、卡密为联系QQ、东鹏红包码、钓鱼类、套现洗钱、金融相关、等任何违反国家法律的类目，一经发现，立刻冻结账户，不予结算！（不要抱有侥幸心理，不管你伪装的再好，风控系统一定会发现你，一经核查发现将备案相关资料移交给相关部门处理）&lt;/p&gt;\n\n&lt;p&gt;本网站在国家相关法律法规规定的范围内，只按现有状况提供软件注册码在线交易第三方网络平台服务，本网站及其所有者非交易一方，也非交易任何一方之代理人或代表;同时， 本网站及其所有者也未授权任何人代表或代理本网站及其所有者从事任何网络交易行为或做出任何承诺、保证或其他类似行为，除非有明确的书面授权。&lt;/p&gt;\n\n&lt;p&gt;鉴于互联网及网络交易的特殊性，本网站无法鉴别和判断相关交易各主体之民事权利和行为能力、资质、信用等状况，也无法鉴别和判断虚拟交易或正在交易或已交易虚拟物品来源 、权属、真伪、性能、规格、质量、数量等权利属性、自然属性及其他各种状况。因此，交易各方在交易前应加以仔细辨明，并慎重考虑和评估交易可能产生的各项风险。&lt;/p&gt;\n\n&lt;p&gt;本网站不希望出现任何因虚拟物品交易而在用户之间及用户与游戏开发运营商之间产生纠纷，但并不保证不发生该类纠纷。对于因前述各类情形而产生的任何纠纷，将由交易各方依 据中华人民共和国现行的有关法律通过适当的方式直接加以解决，本网站及其所有者不参与其中；对于因此类交易而产生的各类纠纷之任何责任和后果，由交易各方承担，本网站及其所有者不承担任何责任及后果。&lt;/p&gt;\n\n&lt;p&gt;本网站不希望出现任何人利用本网站或因使用本网站而侵犯他人合法权益的行为，但并不保证不会发生此类行为或类似行为。本网站将依据中国法律采取必要的措施防止发生前述各类行为或降低发生这类行为的可能性或者降低由此造成的损失及其后果。对于因前述各类情形而产生的任何纠纷，将由权利受到侵害之人和侵权方依据中华人民共和国现行的有关法律通过适当的方式直接加以 解决，本网站及其所有者不参与其中；对于因此类行为产生的各类纠纷之任何责任和后果，由相关责任方承担，本网站及其所有者不承担任何责任及后果。&lt;/p&gt;\n\n&lt;p&gt;凡有客户投诉涉及不正常交易或疑似诈骗的帐户，公司有权冻结相应帐户。请相应帐户持有人于冻结之日起30日内提供相应证明材料证明交易的真实性或投诉不属实。在相应时间内 未提供材料或材料审核未通过的，公司有权进行帐户相应款项退回处理。&lt;/p&gt;\n\n&lt;p&gt;任何非本网站责任而产生的任何其他纠纷，概由纠纷各方依据中国相关法律以适当的方式直接加以解决，本网站不参与其中；对于因该类行为产生的各类纠纷之任何责任和后果，由相关各方承担，本网站及其所有者不承担任何责任及后果。&lt;/p&gt;\n', '1', '1', '1607699273', '0', '1', '0');
INSERT INTO `article` VALUES ('17', '3', '关于我们', '', '', '&lt;h2&gt;关于我们&lt;/h2&gt;\n\n&lt;p&gt; &lt;/p&gt;\n\n&lt;p&gt;自动发卡网是全新模式最专业的卡密寄售网站。 &lt;/p&gt;\n\n&lt;p&gt;年轻活力、朝气蓬勃、积极向上、团结互助、善于思考、认真工作、 &lt;br /&gt;&lt;br /&gt;\n核心价值： 客户第一、以人为本、团队利益、诚信负责。&lt;/p&gt;\n\n&lt;p&gt;经营理念 ：不断创新，共同成长 。客户至上，用最真挚的态度为客户服务。 始终如一，为梦想而努力奋斗！ &lt;/p&gt;\n', '1', '1', '1607699267', '0', '0', '0');
INSERT INTO `article` VALUES ('18', '3', '公司简介', '', '', '&lt;p&gt;本公司旗下的发卡啦自动发卡平台在国家相关法律法规规定的范围内，本网站在国家相关法律法规规定的范围内，只按现有状况提供软件注册码在线交易第三方网络平台服务，本网站及其所有者非交易一方，也非交易任何一方之代理人或代表;同时， 本网站及其所有者也未授权任何人代表或代理本网站及其所有者从事任何网络交易行为或做出任何承诺、保证或其他类似行为，除非有明确的书面授权。&lt;/p&gt;\n\n&lt;p&gt;鉴于互联网及网络交易的特殊性，本网站无法鉴别和判断相关交易各主体之民事权利和行为能力、资质、信用等状况，也无法鉴别和判断虚拟交易或正在交易或已交易虚拟物品来源 、权属、真伪、性能、规格、质量、数量等权利属性、自然属性及其他各种状况。因此，交易各方在交易前应加以仔细辨明，并慎重考虑和评估交易可能产生的各项风险。&lt;/p&gt;\n\n&lt;p&gt;本网站不希望出现任何因虚拟物品交易而在用户之间及用户与游戏开发运营商之间产生纠纷，但并不保证不发生该类纠纷。对于因前述各类情形而产生的任何纠纷，将由交易各方依 据中华人民共和国现行的有关法律通过适当的方式直接加以解决，本网站及其所有者不参与其中；对于因此类交易而产生的各类纠纷之任何责任和后果，由交易各方承担，本网站及其所有者不承担任何责任及后果。&lt;/p&gt;\n\n&lt;p&gt;本网站不希望出现任何人利用本网站或因使用本网站而侵犯他人合法权益的行为，但并不保证不会发生此类行为或类似行为。本网站将依据中国法律采取必要的措施防止发生前述各类行为或降低发生这类行为的可能性或者降低由此造成的损失及其后果。对于因前述各类情形而产生的任何纠纷，将由权利受到侵害之人和侵权方依据中华人民共和国现行的有关法律通过适当的方式直接加以 解决，本网站及其所有者不参与其中；对于因此类行为产生的各类纠纷之任何责任和后果，由相关责任方承担，本网站及其所有者不承担任何责任及后果。&lt;/p&gt;\n\n&lt;p&gt;凡有客户投诉涉及不正常交易或疑似诈骗的帐户，公司有权冻结相应帐户。请相应帐户持有人于冻结之日起30日内提供相应证明材料证明交易的真实性或投诉不属实。在相应时间内 未提供材料或材料审核未通过的，公司有权进行帐户相应款项退回处理。&lt;/p&gt;\n\n&lt;p&gt;任何非本网站责任而产生的任何其他纠纷，概由纠纷各方依据中国相关法律以适当的方式直接加以解决，本网站不参与其中；对于因该类行为产生的各类纠纷之任何责任和后果，由相关各方承担，本网站及其所有者不承担任何责任及后果。&lt;/p&gt;\n', '1', '1', '1607699256', '0', '0', '0');
INSERT INTO `article` VALUES ('20', '3', '免责声明', '', '', '&lt;p&gt;自动发卡网禁止出售涉、黄、赌、毒、抽奖类、诈骗类、公民身份信息、任何实名制账号如微信支付宝、QQ刷赞、卡盟QQ钻、卡密为联系QQ、东鹏红包码、钓鱼类、套现洗钱、金融相关、等任何违反国家法律的类目，一经发现，立刻冻结账户，不予结算！（不要抱有侥幸心理，不管你伪装的再好，风控系统一定会发现你，一经核查发现将备案相关资料移交给相关部门处理）&lt;/p&gt;\n\n&lt;p&gt;本网站在国家相关法律法规规定的范围内，只按现有状况提供虚拟物品在线自动发卡综合解决方案服务，本网站及其所有者非交易一方，也非交易任何一方之代理人或代表;同时，本网站及其所有者也未授权任何人代表或代理本网站及其所有者从事任何网络交易行为或做出任何承诺、保证或其他类似行为，除非有明确的书面授权。&lt;br /&gt;&lt;br /&gt;\n鉴于互联网及网络交易的特殊性，本网站无法鉴别和判断相关交易各主体之民事权利和行为能力、资质、信用等状况，也无法鉴别和判断虚拟交易或正在交易或已交易虚拟物品来源、权属、真伪、性能、规格、质量、数量等权利属性、自然属性及其他各种状况。因此，交易各方在交易前应加以仔细辨明，并慎重考虑和评估交易可能产生的各项风险。&lt;br /&gt;&lt;br /&gt;\n本网站不希望出现任何因虚拟物品交易而在用户之间及用户与游戏开发运营商之间产生纠纷，但并不保证不发生该类纠纷。对于因前述各类情形而产生的任何纠纷，将由交易各方依据中华人民共和国现行的有关法律通过适当的方式直接加以解决，本网站及其所有者不参与其中；对于因此类交易而产生的各类纠纷之任何责任和后果，由交易各方承担，本网站及其所有者不承担任何责任及后果。&lt;br /&gt;&lt;br /&gt;\n本网站不希望出现任何人利用本网站或因使用本网站而侵犯他人合法权益的行为，但并不保证不会发生此类行为或类似行为。本网站将依据中国法律采取必要的措施防止发生前述各类行为或降低发生这类行为的可能性或者降低由此造成的损失及其后果。对于因前述各类情形而产生的任何纠纷，将由权利受到侵害之人和侵权方依据中华人民共和国现行的有关法律通过适当的方式直接加以解决，本网站及其所有者不参与其中；对于因此类行为产生的各类纠纷之任何责任和后果，由相关责任方承担，本网站及其所有者不承担任何责任及后果。&lt;br /&gt;&lt;br /&gt;\n凡有客户投诉涉及不正常交易或疑似诈骗的帐户，公司有权冻结相应帐户。请相应帐户持有人于冻结之日起30日内提供相应证明材料证明交易的真实性或投诉不属实。在相应时间内未提供材料或材料审核未通过的，公司有权进行帐户相应款项退回处理。&lt;br /&gt;&lt;br /&gt;\n任何非本网站责任而产生的任何其他纠纷，概由纠纷各方依据中国相关法律以适当的方式直接加以解决，本网站不参与其中；对于因该类行为产生的各类纠纷之任何责任和后果，由相关各方承担，本网站及其所有者不承担任何责任及后果。&lt;/p&gt;\n', '1', '1', '1607699176', '0', '0', '0');
INSERT INTO `article` VALUES ('46', '3', '违规举报', '', '', '&lt;p&gt;自动发卡网（禁止销售以下商品）2020年11月4日更新！&lt;/p&gt;\n\n&lt;p&gt;--------------以下类目严禁接入-----------------&lt;/p&gt;\n\n&lt;p&gt;1.涉黄类（涉及淫秽相关所有商品）如直播盒子.色情网站充值码。&lt;/p&gt;\n\n&lt;p&gt;2.涉赌类（涉及赌博相关所有商品）如赌博网站.博彩网站等。&lt;/p&gt;\n\n&lt;p&gt;3.涉毒类（涉及毒品相关所有商品）如毒品买卖。&lt;/p&gt;\n\n&lt;p&gt;4.诈骗类（涉及骗人相关所有商品）如诱导客户付款.欺骗性质为目的的。&lt;/p&gt;\n\n&lt;p&gt;5.手工类（涉及代充相关所有商品）如会员代充，Q名片赞等。&lt;/p&gt;\n\n&lt;p&gt;6.实物类（所有的实物性质的商品）所有的非虚拟的实物商品交易。&lt;/p&gt;\n\n&lt;p&gt;7.套现类（自己为自己充值的商品）例如 支付宝套现。&lt;/p&gt;\n\n&lt;p&gt;8.实名类（涉及公民信息所有商品）如已实名的支付宝账号.微信账号.身份证号.等。&lt;/p&gt;\n\n&lt;p&gt;9.虚假类（卡密为联系QQ的商品 ）如卡密为联系QQXXXX或者QQ群的商品。&lt;/p&gt;\n\n&lt;p&gt;10.金融类（涉及金融相关所有商品）如投资理财网站.返利网站等。&lt;/p&gt;\n\n&lt;p&gt;&lt;span style=&quot;color:#e74c3c;&quot;&gt;&lt;strong&gt;涉及以上类目和任何违反国家法律的类目，一经发现，立刻冻结账户，不予结算！&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;（不要抱有侥幸心理,伪装的再好也逃不过我们的风控系统）违规请自觉绕道。&lt;/p&gt;\n\n&lt;p&gt;打造绿色交易平台-本平台诚邀诚信商户入驻-长期合作共赢-在此祝大家生意兴隆-感谢支持和配合。&lt;/p&gt;\n', '1', '0', '1608096663', '0', '0', '0');
INSERT INTO `article` VALUES ('60', '1', '自动发卡网 ● 禁售商品名单', '', '', '&lt;p&gt;自动发卡平台（禁止销售以下商品）&lt;/p&gt;\n\n&lt;p&gt;--------------以下类目严禁接入-----------------&lt;/p&gt;\n\n&lt;p&gt;1.涉黄类（涉及淫秽相关所有商品）如直播盒子.色情网站充值码。&lt;/p&gt;\n\n&lt;p&gt;2.涉赌类（涉及赌博相关所有商品）如赌博网站.博彩网站等。&lt;/p&gt;\n\n&lt;p&gt;3.涉毒类（涉及毒品相关所有商品）如毒品买卖。&lt;/p&gt;\n\n&lt;p&gt;4.诈骗类（涉及骗人相关所有商品）如诱导客户付款.欺骗性质为目的的。&lt;/p&gt;\n\n&lt;p&gt;5.手工类（涉及代充相关所有商品）如会员代充，Q名片赞等。&lt;/p&gt;\n\n&lt;p&gt;6.实物类（所有的实物性质的商品）所有的非虚拟的实物商品交易。&lt;/p&gt;\n\n&lt;p&gt;7.套现类（自己为自己充值的商品）例如 支付宝套现。&lt;/p&gt;\n\n&lt;p&gt;8.实名类（涉及公民信息所有商品）如已实名的支付宝账号.微信账号.身份证号.等。&lt;/p&gt;\n\n&lt;p&gt;9.虚假类（卡密为联系QQ的商品 ）如卡密为联系QQXXXX或者QQ群的商品。&lt;/p&gt;\n\n&lt;p&gt;10.金融类（设计金融相关所有商品）如投资理财网站.返利网站等。&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;涉及以上类目和任何违反国家法律的类目，一经发现，立刻冻结账户，不予结算！&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;涉及以上类目和任何违反国家法律的类目，一经发现，立刻冻结账户，不予结算！&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;涉及以上类目和任何违反国家法律的类目，一经发现，立刻冻结账户，不予结算！&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt; &lt;/p&gt;\n', '1', '1', '1607699015', '0', '0', '0');
INSERT INTO `article` VALUES ('84', '5', '自动发卡网 ● 平台结算时间', '', '', '&lt;p&gt;平台结算模式:D+1=当天销售金额次日到账，全年无休，节假日正常结算。&lt;/p&gt;\n\n&lt;p&gt;平台（自动提现）到账时间均为每天晚上12点结算&lt;/p&gt;\n\n&lt;p&gt;自动提现免费（小数点后忽略不计）&lt;/p&gt;\n\n&lt;p&gt;手工提现2元手续费（小数点后忽略不计）&lt;/p&gt;\n\n&lt;p&gt;官方网网站：www.xxxx.com 认准唯一官网，谨防假冒。&lt;/p&gt;\n', '1', '1', '1607699003', '0', '0', '0');
INSERT INTO `article` VALUES ('86', '4', '2020年12月15日系统自动提现资金已到账', '', '', '&lt;p&gt;各位、财付通、微信、支付宝金额已由系统自动打款(满100元的商户)并且已经全部到账，请检查您的钱包，如未到账请在30分钟之后再查询，银行卡结算的商户会延迟2个小时左右到账请悉知，如需帮助请直接联系快发卡客服。&lt;/p&gt;\n', '1', '1', '1608051881', '0', '0', '0');

-- ----------------------------
-- Table structure for article_category
-- ----------------------------
DROP TABLE IF EXISTS `article_category`;
CREATE TABLE `article_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(10) unsigned NOT NULL DEFAULT '0',
  `path` varchar(1024) NOT NULL,
  `name` varchar(30) NOT NULL DEFAULT '',
  `alias` varchar(30) NOT NULL DEFAULT '',
  `remark` varchar(255) NOT NULL DEFAULT '',
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `create_at` int(10) unsigned NOT NULL,
  `update_at` int(10) unsigned DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article_category
-- ----------------------------
INSERT INTO `article_category` VALUES ('1', '0', '0', '平台公告', 'notice', '平台公告，首页显示', '1', '1520268395', '0');
INSERT INTO `article_category` VALUES ('2', '0', '0', '常见问题', 'faq', '常见问题', '1', '1520268562', '0');
INSERT INTO `article_category` VALUES ('3', '0', '0', '单页', 'single', '单页', '1', '1521791915', '0');
INSERT INTO `article_category` VALUES ('4', '0', '0', '结算公告', 'settlement', '结算公告', '1', '1608051837', '0');
INSERT INTO `article_category` VALUES ('5', '0', '0', '系统公告', 'system', '系统公告，商户端显示', '1', '1612245570', '0');
INSERT INTO `article_category` VALUES ('6', '0', '0', '新闻动态', 'news', '新闻动态', '1', '1612245570', '0');

-- ----------------------------
-- Table structure for auto_unfreeze
-- ----------------------------
DROP TABLE IF EXISTS `auto_unfreeze`;
CREATE TABLE `auto_unfreeze` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '用户id',
  `money` decimal(10,3) unsigned NOT NULL DEFAULT '0.000' COMMENT '冻结金额',
  `unfreeze_time` int(11) NOT NULL DEFAULT '0' COMMENT '解冻时间',
  `created_at` int(11) NOT NULL DEFAULT '0' COMMENT '更新时间',
  `trade_no` varchar(255) NOT NULL DEFAULT '0' COMMENT '冻结资金来源订单号',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '冻结资金记录状态，1：可用，-1：不可用（订单申诉中等情况）',
  PRIMARY KEY (`id`),
  KEY `unfreeze_time` (`unfreeze_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单金额T+1日自动解冻表';

-- ----------------------------
-- Records of auto_unfreeze
-- ----------------------------

-- ----------------------------
-- Table structure for cash
-- ----------------------------
DROP TABLE IF EXISTS `cash`;
CREATE TABLE `cash` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `type` tinyint(3) unsigned NOT NULL COMMENT '收款产品类型 1支付宝 2微信',
  `collect_info` varchar(1024) NOT NULL DEFAULT '' COMMENT '提现信息',
  `money` decimal(10,2) unsigned NOT NULL COMMENT '提现金额',
  `fee` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '手续费',
  `actual_money` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '实际到账',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '状态 0审核中 1审核通过 2审核未通过',
  `create_at` int(10) unsigned NOT NULL COMMENT '创建时间',
  `complete_at` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '完成时间',
  `collect_img` tinytext COMMENT '收款二维码',
  `auto_cash` tinyint(4) NOT NULL DEFAULT '0' COMMENT '1 表示自动提现',
  `bank_name` varchar(50) NOT NULL DEFAULT '' COMMENT '银行名称',
  `bank_branch` varchar(150) NOT NULL DEFAULT '' COMMENT '开户地址',
  `bank_card` varchar(50) NOT NULL DEFAULT '' COMMENT '银行卡号',
  `realname` varchar(50) NOT NULL DEFAULT '' COMMENT '真实姓名',
  `idcard_number` varchar(50) NOT NULL DEFAULT '' COMMENT '身份证号码',
  `orderid` varchar(50) NOT NULL DEFAULT '' COMMENT '订单号',
  `account` int(11) NOT NULL DEFAULT '0' COMMENT '代付账号',
  `daifu_status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '代付状态（0，未申请，1，已申请）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cash
-- ----------------------------

-- ----------------------------
-- Table structure for cash_channel
-- ----------------------------
DROP TABLE IF EXISTS `cash_channel`;
CREATE TABLE `cash_channel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL COMMENT '代付渠道名',
  `code` varchar(255) NOT NULL COMMENT '代付渠道代码',
  `account_fields` text NOT NULL COMMENT '代付所需的字段',
  `type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1支付宝，2微信，3银行',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '渠道状态，0关闭，1开启',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cash_channel
-- ----------------------------
INSERT INTO `cash_channel` VALUES ('1', '支付宝转账', 'AliTransfer', 'appId:appId|rsaPrivateKey:rsaPrivateKey|alipayrsaPublicKey:alipayrsaPublicKey', '1', '0');
INSERT INTO `cash_channel` VALUES ('2', '新支付宝证书转账', 'AliNewTransfer', 'appId:appId|私钥字符串:rsaPrivateKey|应用证书SN(如何获取看文档):appCertSn', '1', '0');

-- ----------------------------
-- Table structure for cash_channel_account
-- ----------------------------
DROP TABLE IF EXISTS `cash_channel_account`;
CREATE TABLE `cash_channel_account` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `channel_id` int(10) unsigned NOT NULL COMMENT '渠道ID',
  `name` varchar(32) NOT NULL DEFAULT '' COMMENT '账户名',
  `params` text NOT NULL COMMENT '参数',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '状态 1启用 0禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cash_channel_account
-- ----------------------------

-- ----------------------------
-- Table structure for channel
-- ----------------------------
DROP TABLE IF EXISTS `channel`;
CREATE TABLE `channel` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '通道ID',
  `title` varchar(255) NOT NULL DEFAULT '' COMMENT '通道名称',
  `code` varchar(50) NOT NULL DEFAULT '' COMMENT '通道代码',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态 1 开启 0 关闭',
  `lowrate` decimal(10,4) unsigned NOT NULL DEFAULT '0.0000' COMMENT '充值费率',
  `accounting_date` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '结算时间 1、D0 2、D1 3、T0 4、T1',
  `account_fields` varchar(1024) NOT NULL DEFAULT '' COMMENT '账户字段',
  `polling` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '接口模式 0单独 1轮询',
  `updatetime` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `paytype` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '支付类型 1 微信扫码 2 微信公众号 3 支付宝扫码 4 支付宝手机 5 网银支付 6',
  `show_name` varchar(255) NOT NULL DEFAULT '' COMMENT '前台展示名称',
  `is_available` tinyint(4) NOT NULL DEFAULT '0' COMMENT '接口可用 0通用 1手机 2电脑',
  `default_fields` varchar(1024) NOT NULL DEFAULT '' COMMENT '字段默认值',
  `applyurl` varchar(255) NOT NULL DEFAULT '' COMMENT '申请地址',
  `is_install` tinyint(4) NOT NULL DEFAULT '0',
  `sort` int(10) NOT NULL DEFAULT '0' COMMENT '渠道排序',
  `is_custom` tinyint(4) NOT NULL DEFAULT '0',
  `is_deposit` tinyint(4) NOT NULL DEFAULT '0',
  `is_airpayx` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COMMENT='支付供应商';

-- ----------------------------
-- Records of channel
-- ----------------------------
INSERT INTO `channel` VALUES ('1', '支付宝扫码', 'AlipayScan', '0', '0.0400', '1', '支付宝公钥:alipay_public_key|商户私钥:merchant_private_key|支付宝APPID:app_id', '0', '0', '1', '支付宝PC', '0', 'charset=UTF-8', 'https://open.alipay.com/platform/homeRoleSelection.htm', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('2', '支付宝H5', 'AlipayWap', '0', '0.0400', '1', '支付宝公钥:alipay_public_key|商户私钥:merchant_private_key|支付宝APPID:app_id', '0', '0', '2', '支付宝手机', '1', 'charset=UTF-8', 'https://open.alipay.com/platform/homeRoleSelection.htm', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('3', '支付宝当面付', 'AlipayQrcode', '0', '0.0400', '1', '支付宝公钥:alipay_public_key|商户私钥:merchant_private_key|支付宝APPID:app_id', '0', '0', '2', '支付宝当面付', '0', 'charset=UTF-8', 'https://open.alipay.com/platform/homeRoleSelection.htm', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('4', '微信官方H5', 'WeixinH5', '0', '0.0400', '1', '商户号:mchid|公众号APPID:appid|公众号Secret:appKey|商户号apiKey:apiKey|证书PEM路径(pem格式，退款使用):pem_cert|证书KEY路径(pem格式，退款使用):pem_key', '0', '0', '4', '微信官方H5', '1', '', 'https://pay.weixin.qq.com/', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('5', '微信官方Native', 'WeixinNative', '0', '0.0400', '1', '商户号:mchid|公众号APPID:appid|公众号Secret:appKey|商户号apiKey:apiKey|证书PEM路径(pem格式，退款使用):pem_cert|证书KEY路径(pem格式，退款使用):pem_key', '0', '0', '3', '微信官方扫码', '2', '', 'https://pay.weixin.qq.com/', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('6', '微信官方JsPay', 'WeixinJspay', '0', '0.0400', '1', '商户号:mchid|公众号APPID:appid|公众号Secret:appKey|商户号apiKey:apiKey|证书PEM路径(pem格式，退款使用):pem_cert|证书KEY路径(pem格式，退款使用):pem_key', '0', '0', '4', '微信官方Jspay', '1', '', 'https://pay.weixin.qq.com/', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('7', '易支付微信', 'Yipay', '0', '0.0400', '1', '网关:gateway|pid:pid|key:key|支付类型:type', '0', '0', '3', '易支付微信', '0', 'type=wxpay', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('8', '官方QQ扫码', 'QqNative', '0', '0.0400', '1', '商户号:mch_id|商户秘钥:key|操作员ID(退款使用):op_userid|操作员密码(退款使用):op_userpwd|PEM证书路径(退款使用):cert_path|PEM密钥路径(退款使用):key_path', '0', '0', '5', 'QQ支付', '2', '', 'https://mp.qpay.tenpay.com/', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('9', '官方QQH5', 'QqH5', '0', '0.0400', '1', '商户号:mch_id|商户秘钥:key|操作员ID(退款使用):op_userid|操作员密码(退款使用):op_userpwd|PEM证书路径(退款使用):cert_path|PEM密钥路径(退款使用):key_path', '0', '0', '6', 'QQ支付', '1', '', 'https://mp.qpay.tenpay.com/', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('10', '鲸支付微信', 'JingPay', '0', '0.0400', '1', 'appid:app_id|key:key|支付类型:type', '0', '0', '3', '微信', '0', '', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('11', '鲸支付支付宝', 'JingPay', '0', '0.0400', '1', 'appid:app_id|key:key|支付类型:type', '0', '0', '1', '支付宝', '0', '', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('12', '官方支付宝扫码', 'AlipayScan', '1', '0.0400', '1', '支付宝APPID:app_id|商户私钥:merchant_private_key|支付宝公钥:alipay_public_key', '0', '0', '1', '支付宝PC', '0', '', '', '1', '0', '1', '0', '0');
INSERT INTO `channel` VALUES ('13', '官方支付宝H5', 'AlipayWap', '1', '0.0400', '1', '支付宝公钥:alipay_public_key|商户私钥:merchant_private_key|支付宝APPID:app_id', '0', '0', '2', '支付宝手机', '1', 'charset=UTF-8', 'https://open.alipay.com/platform/homeRoleSelection.htm', '1', '0', '1', '0', '0');
INSERT INTO `channel` VALUES ('14', '易支付支付宝', 'Yipay', '1', '0.0400', '1', '网关（submit.php 结尾）:gateway|pid:pid|key:key|支付类型:type', '0', '0', '1', '易支付支付宝', '0', 'type=alipay', '', '1', '0', '1', '0', '0');
INSERT INTO `channel` VALUES ('15', '码支付支付宝', 'FakaCodePay', '1', '0.0400', '1', 'appid:appid|appkey:appkey|支付编码:type', '0', '0', '1', '支付宝', '0', 'type=alipay', '', '1', '0', '1', '0', '0');
INSERT INTO `channel` VALUES ('16', '码支付微信', 'FakaCodePay', '1', '0.0400', '1', 'appid:appid|appkey:appkey|支付编码:type', '0', '0', '3', '微信', '0', 'type=wxpay', '', '1', '0', '1', '0', '0');
INSERT INTO `channel` VALUES ('17', '易支付微信', 'Yipay', '1', '0.0400', '1', '网关（submit.php 结尾）:gateway|pid:pid|key:key|支付类型:type', '0', '0', '3', '易支付微信', '0', 'type=wxpay', '', '1', '0', '1', '0', '0');
INSERT INTO `channel` VALUES ('18', '微信官方Native', 'WeixinNative', '1', '0.0400', '1', '商户号:mchid|公众号APPID:appid|公众号Secret:appKey|商户号apiKey:apiKey|证书PEM路径(pem格式，退款使用):pem_cert|证书KEY路径(pem格式，退款使用):pem_key', '0', '0', '3', '微信官方扫码', '2', 'appKey=0|pem_cert=0|pem_key=0', 'https://pay.weixin.qq.com/', '1', '0', '1', '0', '0');
INSERT INTO `channel` VALUES ('19', '官方QQ扫码', 'QqNative', '1', '0.0400', '1', '商户号:mch_id|商户秘钥:key|操作员ID(退款使用):op_userid|操作员密码(退款使用):op_userpwd|PEM证书路径(退款使用):cert_path|PEM密钥路径(退款使用):key_path', '0', '0', '5', 'QQ支付', '2', 'op_userid=0|op_userpwd=0|cert_path=0|key_path=0', '', '1', '0', '1', '0', '0');
INSERT INTO `channel` VALUES ('20', '易支付QQ', 'Yipay', '1', '0.0400', '1', '网关（submit.php 结尾）:gateway|pid:pid|key:key|支付类型:type', '0', '0', '5', '易支付QQ', '0', 'type=qqpay', '', '1', '0', '1', '0', '0');
INSERT INTO `channel` VALUES ('21', '支付宝当面付', 'AlipayQrcode', '1', '0.0400', '1', '支付宝APPID:app_id|商户私钥:merchant_private_key|支付宝公钥:alipay_public_key', '0', '0', '2', '支付宝当面付', '0', 'charset=UTF-8', 'https://open.alipay.com/platform/homeRoleSelection.htm', '1', '0', '1', '0', '0');
INSERT INTO `channel` VALUES ('22', '码支付支付宝', 'FakaCodePay', '1', '0.0400', '1', 'appid:appid|appkey:appkey|支付编码:type', '0', '0', '1', '支付宝', '0', 'type=alipay', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('23', '码支付微信', 'FakaCodePay', '1', '0.0400', '1', 'appid:appid|appkey:appkey|支付编码:type', '0', '0', '3', '微信', '0', 'type=wxpay', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('24', '天天支付宝', 'TtPay', '0', '0.0400', '1', 'appid:appid|key:key|支付编码:paytype', '0', '0', '1', '支付宝', '0', 'paytype=alipay.native', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('25', '天天微信', 'TtPay', '0', '0.0400', '1', 'appid:appid|key:key|支付编码:paytype', '0', '0', '3', '微信', '0', 'paytype=wx.h5', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('26', 'U9支付宝', 'U9Pay', '0', '0.0400', '1', '商户号:pid|秘钥:key|支付方式:paytype', '0', '0', '1', '支付宝', '0', '', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('27', 'U9微信', 'U9Pay', '0', '0.0400', '1', '商户号:pid|秘钥:key|支付方式:paytype', '0', '0', '3', '微信', '0', '', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('28', 'ZY支付宝', 'ZyPay', '0', '0.0400', '1', '网关:gateway|商户号:memberid|秘钥:key|支付方式:type', '0', '0', '1', '支付宝', '0', '', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('29', 'ZY微信', 'ZyPay', '0', '0.0400', '1', '网关:gateway|商户号:memberid|秘钥:key|支付方式:type', '0', '0', '3', '微信', '0', '', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('30', '码支付QQ', 'FakaCodePay', '0', '0.0400', '1', 'appid:appid|appkey:appkey|支付编码:type', '0', '0', '5', 'QQ支付', '0', 'type=qqpay', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('31', '码支付QQ', 'FakaCodePay', '0', '0.0400', '1', 'appid:appid|appkey:appkey|支付编码:type', '0', '0', '5', 'QQ支付', '0', 'type=qqpay', '', '1', '0', '1', '0', '0');
INSERT INTO `channel` VALUES ('32', '深海支付宝', 'SHpay', '1', '0.0400', '1', 'appid:appid|apikey:apikey|支付编码:bankcode', '0', '0', '1', '支付宝', '0', '', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('33', '深海微信', 'SHpay', '0', '0.0000', '1', 'appid:appid|apikey:apikey|支付编码:bankcode', '0', '0', '3', '微信', '0', '', '', '1', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('34', '易速付微信', 'YisufuPay', '0', '0.0400', '1', '用户编号:open_userid|用户秘钥:open_userkey|子商户号:sub_mch_id|支付方式:channel_type', '0', '0', '3', '微信', '0', 'channel_type=WECHAT_MP', '', '0', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('35', '易速付支付宝', 'YisufuPay', '0', '0.0400', '1', '用户编号:open_userid|用户秘钥:open_userkey|子商户号:sub_mch_id|支付方式:channel_type', '0', '0', '1', '支付宝', '0', 'channel_type=ALIPAY', '', '0', '0', '0', '0', '0');
INSERT INTO `channel` VALUES ('36', '闪电安全支付宝', 'Airpayx', '1', '0.0400', '1', '支付方式:channel_type', '0', '0', '1', '支付宝', '0', 'channel_type=alipay', '', '1', '0', '1', '0', '1');
INSERT INTO `channel` VALUES ('37', '闪电安全微信', 'Airpayx', '1', '0.0400', '1', '支付方式:channel_type', '0', '0', '3', '微信', '0', 'channel_type=wxpay', '', '1', '0', '1', '0', '1');

-- ----------------------------
-- Table structure for channel_account
-- ----------------------------
DROP TABLE IF EXISTS `channel_account`;
CREATE TABLE `channel_account` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `channel_id` int(10) unsigned NOT NULL COMMENT '渠道ID',
  `name` varchar(32) NOT NULL DEFAULT '' COMMENT '账户名',
  `params` text NOT NULL COMMENT '参数',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '状态 1启用 0禁用',
  `lowrate` decimal(10,4) unsigned NOT NULL DEFAULT '0.0000' COMMENT '充值费率',
  `rate_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '费率设置 0 继承接口  1单独设置',
  `user_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of channel_account
-- ----------------------------

-- ----------------------------
-- Table structure for complaint
-- ----------------------------
DROP TABLE IF EXISTS `complaint`;
CREATE TABLE `complaint` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `trade_no` char(50) NOT NULL DEFAULT '',
  `type` varchar(20) NOT NULL DEFAULT '',
  `qq` varchar(15) NOT NULL DEFAULT '',
  `mobile` varchar(15) NOT NULL DEFAULT '',
  `desc` varchar(1000) NOT NULL DEFAULT '',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0待处理 1已处理',
  `admin_read` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '管理员查看状态',
  `create_at` int(10) unsigned NOT NULL,
  `create_ip` varchar(15) NOT NULL DEFAULT '',
  `pwd` char(10) NOT NULL DEFAULT '123456' COMMENT '投诉单查询密码',
  `result` tinyint(4) NOT NULL DEFAULT '0' COMMENT '申诉结果',
  `expire_at` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '申诉过期时间',
  `proxy_parent_user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '上级代理商ID',
  `buyer_qrcode` varchar(1000) DEFAULT NULL,
  `select_cards` varchar(1000) DEFAULT NULL,
  `num` int(11) DEFAULT '1',
  `price` decimal(10,2) DEFAULT '0.00',
  `merchant_status` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of complaint
-- ----------------------------

-- ----------------------------
-- Table structure for complaint_message
-- ----------------------------
DROP TABLE IF EXISTS `complaint_message`;
CREATE TABLE `complaint_message` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `trade_no` varchar(255) NOT NULL DEFAULT '0' COMMENT '投诉所属订单',
  `from` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '发送人，0为管理员发送的消息',
  `content` varchar(1024) NOT NULL DEFAULT '' COMMENT '对话内容',
  `status` tinyint(3) NOT NULL DEFAULT '0' COMMENT '0未读  1已读',
  `create_at` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '发送时间',
  `content_type` varchar(255) NOT NULL DEFAULT '0' COMMENT '投诉内容类型：0：文本消息，1：图片消息',
  `agent_id` int(10) NOT NULL DEFAULT '0' COMMENT '代理ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='投诉会话信息';

-- ----------------------------
-- Records of complaint_message
-- ----------------------------

-- ----------------------------
-- Table structure for email_code
-- ----------------------------
DROP TABLE IF EXISTS `email_code`;
CREATE TABLE `email_code` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL DEFAULT '' COMMENT '邮箱',
  `screen` varchar(30) NOT NULL DEFAULT '' COMMENT '场景',
  `code` char(6) NOT NULL DEFAULT '' COMMENT '验证码',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态：0：未使用 1：已使用',
  `create_at` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of email_code
-- ----------------------------

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `cate_id` int(10) unsigned NOT NULL,
  `theme` varchar(15) NOT NULL DEFAULT 'default' COMMENT '主题',
  `sort` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '排序',
  `name` varchar(500) NOT NULL DEFAULT '',
  `price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
  `cost_price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '成本价',
  `wholesale_discount` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '批发优惠',
  `wholesale_discount_list` text NOT NULL COMMENT '批发价',
  `limit_quantity` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '起购数量',
  `inventory_notify` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '库存预警 0表示不报警',
  `inventory_notify_type` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '库存预警通知方式 1站内信 2邮件',
  `coupon_type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '优惠券 0不支持 1支持',
  `sold_notify` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '售出通知',
  `take_card_type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '取卡密码 0关闭 1必填 2选填',
  `visit_type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '访问密码',
  `visit_password` varchar(30) NOT NULL DEFAULT '' COMMENT '访问密码',
  `contact_limit` enum('mobile','email','qq','any','default') NOT NULL DEFAULT 'default' COMMENT '客户信息',
  `content` text NOT NULL COMMENT '商品说明',
  `remark` varchar(200) NOT NULL DEFAULT '' COMMENT '使用说明',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '0下架 1上架',
  `create_at` int(10) unsigned NOT NULL DEFAULT '0',
  `is_freeze` tinyint(4) DEFAULT '0',
  `sms_payer` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '短信付费方：0买家 1商户',
  `delete_at` int(11) DEFAULT NULL COMMENT '删除标记',
  `card_order` tinyint(3) NOT NULL DEFAULT '0' COMMENT '发卡顺序 0现卖老卡 1先卖新卡',
  `can_proxy` tinyint(3) NOT NULL DEFAULT '0' COMMENT '代理销售',
  `is_proxy` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否是对接别人的商品',
  `proxy_id` int(20) NOT NULL DEFAULT '0' COMMENT '代理的商品ID',
  `proxy_code` varchar(100) DEFAULT '' COMMENT '商品对接码',
  `proxy_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '代理成本价格',
  `proxy_price_add` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '代理加价',
  `proxy_sync_content` tinyint(4) NOT NULL DEFAULT '0',
  `proxy_price_diy` tinyint(4) NOT NULL DEFAULT '0',
  `is_cross` tinyint(4) DEFAULT '0',
  `cross_id` int(11) DEFAULT '0',
  `cross_params` varchar(255) DEFAULT NULL,
  `selectcard_fee` decimal(10,2) DEFAULT '0.00',
  `proxy_sync_name` tinyint(4) DEFAULT '0',
  `max_quantity` int(10) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `cate_id` (`cate_id`) USING BTREE,
  KEY `user_id` (`user_id`) USING BTREE,
  KEY `stauts` (`status`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------

-- ----------------------------
-- Table structure for goods_card
-- ----------------------------
DROP TABLE IF EXISTS `goods_card`;
CREATE TABLE `goods_card` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `goods_id` int(10) unsigned NOT NULL,
  `number` text,
  `secret` text,
  `status` tinyint(3) NOT NULL DEFAULT '1' COMMENT '-1删除 0不可用 1可用 2已使用',
  `create_at` int(10) unsigned NOT NULL DEFAULT '0',
  `delete_at` int(11) DEFAULT NULL COMMENT '删除标记',
  `sell_time` int(11) DEFAULT NULL COMMENT '售出时间',
  `is_cross` tinyint(4) DEFAULT '0',
  `is_first` int(11) DEFAULT '0',
  `unfreeze_at` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `goods_card_user_id_index` (`user_id`),
  KEY `goods_card_goods_id_index` (`goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_card
-- ----------------------------

-- ----------------------------
-- Table structure for goods_category
-- ----------------------------
DROP TABLE IF EXISTS `goods_category`;
CREATE TABLE `goods_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `name` varchar(100) NOT NULL,
  `sort` int(10) unsigned NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL,
  `create_at` int(10) unsigned NOT NULL,
  `theme` varchar(15) NOT NULL DEFAULT 'default' COMMENT '主题',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_category
-- ----------------------------

-- ----------------------------
-- Table structure for goods_coupon
-- ----------------------------
DROP TABLE IF EXISTS `goods_coupon`;
CREATE TABLE `goods_coupon` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `cate_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '全部',
  `type` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '类型 1、元  100、%',
  `amount` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
  `code` varchar(255) NOT NULL DEFAULT '',
  `remark` varchar(100) NOT NULL DEFAULT '' COMMENT '备注',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '1未使用 2已用',
  `expire_at` int(10) unsigned NOT NULL,
  `create_at` int(10) unsigned NOT NULL,
  `delete_at` int(11) DEFAULT NULL COMMENT '删除标记',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`code`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_coupon
-- ----------------------------

-- ----------------------------
-- Table structure for goods_pool
-- ----------------------------
DROP TABLE IF EXISTS `goods_pool`;
CREATE TABLE `goods_pool` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `sort` int(11) DEFAULT '0',
  `status` tinyint(4) DEFAULT '0',
  `span_id` int(11) DEFAULT '0',
  `expire_at` int(11) DEFAULT NULL,
  `create_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_pool
-- ----------------------------

-- ----------------------------
-- Table structure for goods_pool_span
-- ----------------------------
DROP TABLE IF EXISTS `goods_pool_span`;
CREATE TABLE `goods_pool_span` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_pool_span
-- ----------------------------
INSERT INTO `goods_pool_span` VALUES ('1', '年费置顶', '#f00');
INSERT INTO `goods_pool_span` VALUES ('2', '平台推荐', '#00F');

-- ----------------------------
-- Table structure for invite_code
-- ----------------------------
DROP TABLE IF EXISTS `invite_code`;
CREATE TABLE `invite_code` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL COMMENT '所有者ID',
  `code` char(32) NOT NULL DEFAULT '' COMMENT '邀请码',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '使用状态 0未使用 1已使用',
  `invite_uid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '受邀用户ID',
  `invite_at` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '邀请时间',
  `create_at` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `expire_at` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of invite_code
-- ----------------------------

-- ----------------------------
-- Table structure for link
-- ----------------------------
DROP TABLE IF EXISTS `link`;
CREATE TABLE `link` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL DEFAULT '0',
  `relation_type` varchar(20) NOT NULL DEFAULT '',
  `relation_id` int(10) unsigned NOT NULL DEFAULT '0',
  `token` char(16) NOT NULL DEFAULT '',
  `short_url` varchar(30) NOT NULL,
  `status` tinyint(3) unsigned NOT NULL,
  `original_user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '商品来源用户ID',
  `agent_type` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '代理类型 0：非代理 1：普通代理 2：全站代理',
  `create_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`relation_type`,`relation_id`),
  UNIQUE KEY `token_uindex` (`token`),
  UNIQUE KEY `user_link_index` (`relation_id`,`relation_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of link
-- ----------------------------

-- ----------------------------
-- Table structure for merchant_log
-- ----------------------------
DROP TABLE IF EXISTS `merchant_log`;
CREATE TABLE `merchant_log` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ip` char(15) NOT NULL DEFAULT '' COMMENT '操作者IP地址',
  `node` char(200) NOT NULL DEFAULT '' COMMENT '当前操作节点',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '操作人用户ID',
  `username` varchar(32) NOT NULL DEFAULT '' COMMENT '用户名',
  `action` varchar(200) NOT NULL DEFAULT '' COMMENT '操作行为',
  `content` text NOT NULL COMMENT '操作内容描述',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统操作日志表';

-- ----------------------------
-- Records of merchant_log
-- ----------------------------

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `from_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '0为管理员',
  `to_id` int(10) unsigned NOT NULL DEFAULT '0',
  `title` varchar(60) NOT NULL DEFAULT '',
  `content` varchar(1024) NOT NULL DEFAULT '',
  `status` tinyint(3) NOT NULL DEFAULT '0' COMMENT '0未读  1已读',
  `create_at` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '发送时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------

-- ----------------------------
-- Table structure for nav
-- ----------------------------
DROP TABLE IF EXISTS `nav`;
CREATE TABLE `nav` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '父id',
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '名称',
  `node` varchar(200) NOT NULL DEFAULT '' COMMENT '节点代码',
  `icon` varchar(100) NOT NULL DEFAULT '' COMMENT '菜单图标',
  `url` varchar(400) NOT NULL DEFAULT '' COMMENT '链接',
  `params` varchar(500) DEFAULT '' COMMENT '链接参数',
  `target` varchar(20) NOT NULL DEFAULT '_self' COMMENT '链接打开方式',
  `sort` int(11) unsigned DEFAULT '0' COMMENT '菜单排序',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态(0:禁用,1:启用)',
  `create_by` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '创建人',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `index_system_menu_node` (`node`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COMMENT='前台导航表';

-- ----------------------------
-- Records of nav
-- ----------------------------
INSERT INTO `nav` VALUES ('1', '0', '网站首页', '', '', '/', '', '0', '9', '1', '0', '2018-03-23 17:20:50');
INSERT INTO `nav` VALUES ('2', '0', '常见问题', '', '', '/company/faq', '', '0', '5', '1', '0', '2018-03-23 17:21:11');
INSERT INTO `nav` VALUES ('3', '0', '联系我们', '', '', '/company/contact', '', '0', '6', '1', '0', '2018-03-23 17:21:35');
INSERT INTO `nav` VALUES ('4', '0', '卡密查询', '', '', '/orderquery', '', '0', '8', '1', '0', '2018-03-23 17:22:09');
INSERT INTO `nav` VALUES ('13', '0', '投诉进度', '', '', '/complaintquery', '', '0', '7', '1', '0', '2018-06-25 20:25:05');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `goods_id` int(10) unsigned NOT NULL,
  `trade_no` varchar(255) DEFAULT NULL,
  `transaction_id` varchar(60) NOT NULL DEFAULT '' COMMENT '流水号',
  `paytype` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `channel_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '支付渠道',
  `channel_account_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '渠道账号',
  `goods_name` varchar(500) NOT NULL DEFAULT '' COMMENT '商品名称',
  `goods_price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '商品单价',
  `goods_cost_price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '成本价',
  `quantity` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '数量',
  `coupon_type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '是否使用优惠券',
  `coupon_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '优惠券ID',
  `coupon_price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '优惠价格',
  `total_price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '总价（买家实付款）',
  `total_cost_price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '总成本价',
  `sold_notify` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '售出通知（买家）',
  `take_card_type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '是否需要取卡密码',
  `take_card_password` varchar(20) NOT NULL DEFAULT '' COMMENT '取卡密码',
  `contact` varchar(20) NOT NULL DEFAULT '' COMMENT '联系方式',
  `email_notify` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '是否邮件通知',
  `email` varchar(60) NOT NULL DEFAULT '' COMMENT '邮箱号',
  `sms_notify` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '是否短信通知',
  `rate` decimal(10,4) unsigned NOT NULL DEFAULT '0.0000' COMMENT '手续费率',
  `fee` decimal(10,3) unsigned NOT NULL DEFAULT '0.000' COMMENT '手续费',
  `sms_price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '短信费',
  `status` tinyint(3) NOT NULL DEFAULT '0' COMMENT '订单状态 0未支付 1已支付 2已关闭',
  `is_freeze` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '冻结状态',
  `create_at` int(10) unsigned NOT NULL COMMENT '创建时间',
  `create_ip` varchar(15) NOT NULL DEFAULT '' COMMENT 'IP',
  `success_at` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '支付成功时间',
  `first_query` tinyint(4) NOT NULL DEFAULT '0' COMMENT '订单第一次查询无需验证码',
  `sms_payer` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '短信付费方：0买家 1商户',
  `total_product_price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '商品总价（不含短信费）',
  `sendout` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '已发货数量',
  `fee_payer` tinyint(4) NOT NULL DEFAULT '1' COMMENT '订单手续费支付方，1：商家承担，2买家承担',
  `settlement_type` tinyint(4) unsigned NOT NULL DEFAULT '1' COMMENT '结算方式，1:T1结算，0:T0结算',
  `finally_money` decimal(10,4) NOT NULL DEFAULT '0.0000' COMMENT '商户订单最终收入（已扣除短信费，手续费）',
  `is_proxy` tinyint(4) NOT NULL DEFAULT '0',
  `proxy_id` int(11) NOT NULL DEFAULT '0' COMMENT '代理的商品ID',
  `proxy_parent_user_id` int(11) NOT NULL DEFAULT '0' COMMENT '上级商家user_id',
  `proxy_finally_money` decimal(10,4) NOT NULL DEFAULT '0.0000',
  `select_cards` varchar(500) DEFAULT NULL,
  `is_cross` tinyint(4) DEFAULT '0',
  `cross_id` int(11) DEFAULT '0',
  `cross_params` varchar(255) DEFAULT NULL,
  `cross_orderid` varchar(255) DEFAULT NULL,
  `is_punish` int(11) DEFAULT '0',
  `selectcard_fee_platform` decimal(10,2) DEFAULT '0.00',
  `selectcard_fee_merchant` decimal(10,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  KEY `order_create_at_index` (`create_at`),
  KEY `index_contract` (`contact`,`status`) USING BTREE,
  KEY `index_tp_count` (`user_id`,`status`,`success_at`,`channel_id`) USING BTREE,
  KEY `user_id` (`user_id`) USING BTREE,
  KEY `goods_id` (`goods_id`) USING BTREE,
  KEY `trade_no` (`trade_no`) USING BTREE,
  KEY `channel_id` (`channel_id`) USING BTREE,
  KEY `status` (`status`) USING BTREE,
  KEY `is_freeze` (`is_freeze`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for order_api
-- ----------------------------
DROP TABLE IF EXISTS `order_api`;
CREATE TABLE `order_api` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `trade_no` varchar(255) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `goods_name` varchar(100) DEFAULT NULL,
  `paytype` int(11) DEFAULT NULL,
  `channel_id` int(11) DEFAULT NULL,
  `channel_account_id` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '0' COMMENT '1已支付  2取消  3退款',
  `create_at` int(11) DEFAULT NULL,
  `success_at` int(11) DEFAULT NULL,
  `total_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `rate` decimal(10,4) NOT NULL DEFAULT '0.0000' COMMENT '手续费率',
  `fee` decimal(10,3) NOT NULL DEFAULT '0.000',
  `finally_money` decimal(10,4) NOT NULL DEFAULT '0.0000',
  `out_trade_no` varchar(255) DEFAULT NULL,
  `notify_url` varchar(255) DEFAULT NULL,
  `return_url` varchar(255) DEFAULT NULL,
  `repost_count` int(10) DEFAULT '0' COMMENT '回调次数',
  `type_name` varchar(255) DEFAULT NULL,
  `notify_status` tinyint(4) DEFAULT '0',
  `last_reissue_time` int(11) DEFAULT '0',
  `settlement_type` tinyint(4) DEFAULT '1' COMMENT '结算方式，1:T1结算，0:T0结算',
  `sitename` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_api
-- ----------------------------

-- ----------------------------
-- Table structure for order_card
-- ----------------------------
DROP TABLE IF EXISTS `order_card`;
CREATE TABLE `order_card` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` int(10) unsigned NOT NULL,
  `number` text,
  `secret` text,
  `card_id` int(10) NOT NULL DEFAULT '0' COMMENT '虚拟卡ID',
  PRIMARY KEY (`id`),
  KEY `order_card_order_id_index` (`order_id`),
  KEY `order_card_card_id_index` (`card_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_card
-- ----------------------------

-- ----------------------------
-- Table structure for order_master
-- ----------------------------
DROP TABLE IF EXISTS `order_master`;
CREATE TABLE `order_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `trade_no` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `trade_no` (`trade_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_master
-- ----------------------------

-- ----------------------------
-- Table structure for order_query_history
-- ----------------------------
DROP TABLE IF EXISTS `order_query_history`;
CREATE TABLE `order_query_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) DEFAULT NULL,
  `create_at` int(11) DEFAULT NULL,
  `query_content` varchar(255) DEFAULT NULL,
  `query_type` tinyint(4) DEFAULT '0' COMMENT '0订单号  1联系方式',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_query_history
-- ----------------------------

-- ----------------------------
-- Table structure for pay_type
-- ----------------------------
DROP TABLE IF EXISTS `pay_type`;
CREATE TABLE `pay_type` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL COMMENT '支付名',
  `logo` varchar(255) NOT NULL DEFAULT '' COMMENT 'logo',
  `ico` varchar(255) NOT NULL DEFAULT '' COMMENT '图标',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='支付类型表';

-- ----------------------------
-- Records of pay_type
-- ----------------------------
INSERT INTO `pay_type` VALUES ('1', '支付宝扫码', '/static/app/payment/icon_zfb.jpg', '/static/app/payment/zfb.png');
INSERT INTO `pay_type` VALUES ('2', '支付宝H5', '/static/app/payment/icon_zfb.jpg', '/static/app/payment/zfb.png');
INSERT INTO `pay_type` VALUES ('3', '微信扫码', '/static/app/payment/icon_wx.jpg', '/static/app/payment/wx.png');
INSERT INTO `pay_type` VALUES ('4', '微信H5', '/static/app/payment/icon_wx.jpg', '/static/app/payment/wx.png');
INSERT INTO `pay_type` VALUES ('5', 'QQ钱包扫码', '/static/app/payment/icon_qq.jpg', '/static/app/payment/qq.png');
INSERT INTO `pay_type` VALUES ('6', 'QQ钱包H5', '/static/app/payment/icon_qq.jpg', '/static/app/payment/qq.png');
INSERT INTO `pay_type` VALUES ('7', '网银支付', '/static/app/payment/icon_bank.jpg', '/static/app/payment/bank.png');
INSERT INTO `pay_type` VALUES ('9', '京东钱包', '/static/app/payment/icon_jd.jpg', '/static/app/payment/jd.png');
INSERT INTO `pay_type` VALUES ('10', '度小满支付', '/static/app/payment/icon_bd.jpg', '/static/app/payment/bd.png');
INSERT INTO `pay_type` VALUES ('11', '云闪付', '/static/app/payment/icon_ysff.jpg', '/static/app/payment/ysff.png');

-- ----------------------------
-- Table structure for plugin
-- ----------------------------
DROP TABLE IF EXISTS `plugin`;
CREATE TABLE `plugin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '0' COMMENT '开启状态',
  `config` text COMMENT '配置',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin
-- ----------------------------
INSERT INTO `plugin` VALUES ('1', 'bgdata', 'bgdata', '1', '{\"admin_bgdata\":\"1\",\"merchant_bgdata\":\"1\"}');
INSERT INTO `plugin` VALUES ('2', 'tradetask', 'tradetask', '1', '{\"status\":\"0\",\"activity_name\":\"百万补贴活动\",\"activity_content\":\"&lt;p&gt;&lt;span style=&quot;color:#e74c3c;&quot;&gt;&lt;strong&gt;&lt;span style=&quot;font-size:24px;&quot;&gt;百万补贴活动已经上线祝商户们多多进财&lt;\\/span&gt;&lt;\\/strong&gt;&lt;\\/span&gt;&lt;\\/p&gt;\\n\\n&lt;p&gt;&lt;span style=&quot;color:#e74c3c;&quot;&gt;&lt;span style=&quot;font-size:16px;&quot;&gt;&lt;strong&gt;活动流程:&lt;\\/strong&gt;&lt;\\/span&gt;&lt;\\/span&gt;&lt;\\/p&gt;\\n\\n&lt;p&gt;&lt;span style=&quot;font-size:16px;&quot;&gt;&lt;span style=&quot;color:#4e5f70;&quot;&gt;&lt;strong&gt;商户后台选择奖励金,需要在规定时间内达到相应的流水后金额奖励金额自动解冻！在后台商户们可以看到奖励金解冻进度！未在期间内达到自己选择的对应流水后,到时间后自动清零!如果商户选择了至尊流水奖励！到时间了流水只有2万则奖励不发放！所以请商户们根据自己情况自行选择！此活动只对新人正常费率的商户们开放！&lt;\\/strong&gt;&lt;\\/span&gt;&lt;\\/span&gt;&lt;span style=&quot;color:#4e5f70;&quot;&gt;&lt;strong&gt;&lt;span style=&quot;font-size:16px;&quot;&gt;商户们可以根据自己业务量来选择对应的任务,当满足这些流水后,平台将奖励现金红包,福利超多！（详情可见下方）&lt;\\/span&gt;&lt;\\/strong&gt;&lt;\\/span&gt;&lt;\\/p&gt;\\n\\n&lt;p&gt;&lt;span style=&quot;font-size:16px;&quot;&gt;&lt;span style=&quot;color:#e74c3c;&quot;&gt;&lt;strong&gt;活动规则:&lt;\\/strong&gt;&lt;\\/span&gt; &lt;\\/span&gt;&lt;\\/p&gt;\\n\\n&lt;p&gt;&lt;span style=&quot;font-size:16px;&quot;&gt;&lt;span style=&quot;color:#4e5f70;&quot;&gt;&lt;strong&gt;1.达到流水后奖励金自动解冻！系统自动将奖励打到商家的收款帐号！&lt;\\/strong&gt;&lt;\\/span&gt;&lt;\\/span&gt;&lt;\\/p&gt;\\n\\n&lt;p&gt;&lt;strong&gt;&lt;span style=&quot;font-size:16px;&quot;&gt;&lt;span style=&quot;color:#4e5f70;&quot;&gt;2.此活动最终解释权归本平台所有！&lt;\\/span&gt;&lt;\\/span&gt;&lt;\\/strong&gt;&lt;\\/p&gt;\\n\\n&lt;p&gt; &lt;\\/p&gt;\\n\",\"repeatapply\":\"1\",\"waitday\":\"0\"}');
INSERT INTO `plugin` VALUES ('3', 'risk', 'risk', '1', '{\"risk_type0\":\"商家存在违规风险\",\"risk_type1\":\"违规产品,请立即整改\",\"risk_type2\":\"投诉量过多,处理不及时\",\"risk_type3\":\"清退封禁\",\"complaint_rate\":\"1\",\"keyword_mode\":\"2\",\"keyword\":\"辅助|外挂\",\"status\":\"0\"}');
INSERT INTO `plugin` VALUES ('4', 'guide', 'guide', '1', '{\"status\":\"0\"}');
INSERT INTO `plugin` VALUES ('5', 'migrate', 'migrate', '1', '{\"app_type\":\"1\",\"db_host\":\"127.0.0.1\",\"db_name\":\"\",\"db_user\":\"\",\"db_pwd\":\"\",\"db_port\":\"3306\",\"migrate_user_repeat\":\"0\",\"migrate_goods\":\"1\",\"migrate_goods_repeat\":\"0\",\"migrate_card\":\"1\",\"migrate_card_repeat\":\"0\",\"status\":\"0\",\"migrate_user\":\"1\"}');
INSERT INTO `plugin` VALUES ('6', 'subdomain', 'subdomain', '1', '{\"status\":\"0\",\"disabled_domains\":\"www|ftp|blog|pay\",\"top_domain\":\"\"}');
INSERT INTO `plugin` VALUES ('7', 'oauth2', 'oauth2', '1', '{\"wechat_open_merchant\":\"0\",\"wechat_open_appid\":\"\",\"wechat_open_secret\":\"\",\"qq_open_merchant\":\"0\",\"qq_open_public\":\"1\",\"qq_open_appid\":\"\",\"qq_open_secret\":\"\"}');
INSERT INTO `plugin` VALUES ('8', 'merchantauth', 'merchantauth', '1', '{\"status\":\"0\",\"auth_type\":\"1\",\"auth_people\":\"1\",\"auth_money\":\"1\",\"start_at\":1615898910,\"auth_type1_appcode\":\"\",\"auth_type2_appcode\":\"\"}');
INSERT INTO `plugin` VALUES ('9', 'app', 'app', '1', '{\"android\":\"\",\"ios\":\"\"}');
INSERT INTO `plugin` VALUES ('10', 'traderank', 'traderank', '1', '{\"status\":\"0\",\"count\":\"10\"}');
INSERT INTO `plugin` VALUES ('11', 'shopdiy', 'shopdiy', '1', '{\"status\":\"1\"}');
INSERT INTO `plugin` VALUES ('12', 'agentsetting', 'agentsetting', '1', '{\"min_money\":\"0.5\",\"poolauth\":\"0\",\"poolauth_tip\":\"查看全网通商品需要申请，请联系客服QQ：888888\",\"autocheck\":\"0\",\"min_rate\":\"50\",\"poolcount_limit\":\"6\"}');
INSERT INTO `plugin` VALUES ('13', 'paysafe', 'paysafe', '1', '{\"status\":\"0\",\"order_count_risk\":\"10\",\"warning_switch\":\"1\",\"warning_minute\":\"15\",\"warning_count\":\"15\",\"order_black_minute\":\"1800\"}');
INSERT INTO `plugin` VALUES ('14', 'cross', 'cross', '1', '{\"status\":\"0\",\"crossauth\":\"1\",\"crossauth_tip\":\"使用跨平台功能需要申请，请联系客服QQ：888888\",\"default_goods_count\":\"50\",\"default_goods_money\":\"1\",\"default_day_count\":\"30\",\"default_day_money\":\"0.5\",\"tip\":\"有几个商品名额 就可以对接卡盟的几个商品，免费送50个对接名额，每新增一个卡盟在送50个名额。\\n警告：请勿对接腾讯软件和国内有代理商的，发现直接冻结账号，不给结算！！！\"}');
INSERT INTO `plugin` VALUES ('15', 'punish', 'punish', '1', '{\"status\":\"0\",\"order_status\":\"0\",\"complaint_point\":\"2\",\"order_count\":\"10\",\"add_rate\":\"4\",\"complaint_status\":\"0\",\"complaint_add_rate\":\"4\",\"goodsoff_status\":\"0\",\"goodsoff_hour\":\"1\",\"goodsoff_count\":\"2\"}');
INSERT INTO `plugin` VALUES ('16', 'lockcard', 'lockcard', '1', '{\"status\":\"0\",\"lock_people\":\"1\",\"lock_time\":\"600\"}');
INSERT INTO `plugin` VALUES ('17', 'payapi', 'payapi', '1', '{\"status\":\"0\",\"tip\":\"使用API支付功能需要申请，请联系客服QQ：888888\",\"channel_alipay_pc\":\"0\",\"channel_wxpay_pc\":\"0\",\"channel_qq_pc\":\"0\",\"channel_alipay_wap\":\"0\",\"channel_wxpay_wap\":\"0\",\"channel_qq_wap\":\"0\"}');
INSERT INTO `plugin` VALUES ('18', 'selectcard', 'selectcard', '1', '{\"status\":\"1\",\"selectcard_fee_min\":\"1\",\"selectcard_fee_platform_rate\":\"50\",\"selectcard_fee_merchant_rate\":\"50\"}');
INSERT INTO `plugin` VALUES ('21', 'custompay', 'custompay', '1', '{\"status\":\"0\",\"need_apply\":\"1\",\"deposit_limit\":\"100\",\"fee_limit\":\"10\",\"custompay_tip\":\"使用自定义支付功能需要申请，请联系客服QQ：888888\"}');
INSERT INTO `plugin` VALUES ('22', 'codepay', 'codepay', '1', '{\"merchant_status\":\"0\",\"uid\":\"\",\"apikey\":\"\",\"need_apply\":\"1\",\"codepay_tip\":\"使用码支付功能需要申请，请联系客服QQ：888888\",\"audio\":\"1\",\"alipay_time\":\"12\",\"weixin_time\":\"6\",\"qq_time\":\"6\",\"step\":0}');
INSERT INTO `plugin` VALUES ('23', 'chat', 'chat', '1', '{\"status\":\"0\"}');
INSERT INTO `plugin` VALUES ('24', 'airpayx', 'airpayx', '1', '{\"status\":\"0\",\"app_key\":\"\",\"app_secret\":\"\",\"airpayxauth\":\"1\",\"airpayxauth_tip\":\"开通闪电安全结算需要申请，请联系客服QQ888888\",\"tip\":\"请认真填写申请信息，严谨黄、赌、诈商户申请\",\"wx_appid\":\"\",\"wx_appsecret\":\"\"}');

-- ----------------------------
-- Table structure for plugin_airpayx
-- ----------------------------
DROP TABLE IF EXISTS `plugin_airpayx`;
CREATE TABLE `plugin_airpayx` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `expire_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_airpayx
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_airpayxauth
-- ----------------------------
DROP TABLE IF EXISTS `plugin_airpayxauth`;
CREATE TABLE `plugin_airpayxauth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `status` tinyint(3) DEFAULT '0',
  `create_at` int(10) DEFAULT NULL,
  `merchant_no` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_airpayxauth
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_ambassador
-- ----------------------------
DROP TABLE IF EXISTS `plugin_ambassador`;
CREATE TABLE `plugin_ambassador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `create_at` int(10) DEFAULT NULL,
  `spread_reward_money` decimal(10,2) DEFAULT '0.00',
  `spread_rebate_rate` decimal(10,3) DEFAULT '0.000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_ambassador
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_chat
-- ----------------------------
DROP TABLE IF EXISTS `plugin_chat`;
CREATE TABLE `plugin_chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `apikey` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '0',
  `style` tinyint(4) DEFAULT '0',
  `business_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_chat
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_codepay_applist
-- ----------------------------
DROP TABLE IF EXISTS `plugin_codepay_applist`;
CREATE TABLE `plugin_codepay_applist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `appid` varchar(255) DEFAULT NULL,
  `appkey` varchar(255) DEFAULT NULL,
  `create_at` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT '0',
  `alipay_uid` varchar(255) DEFAULT NULL,
  `wordkey` varchar(255) DEFAULT NULL,
  `alipay_type` tinyint(4) DEFAULT '0',
  `alipay_ck` text,
  `alipay_online` tinyint(4) DEFAULT '0',
  `weixin_type` tinyint(4) DEFAULT '0',
  `qq_type` tinyint(4) DEFAULT '1',
  `qq_ck` text,
  `weixin_online` tinyint(4) DEFAULT '0',
  `qq_online` tinyint(4) DEFAULT '0',
  `alipay_open` tinyint(4) DEFAULT '0',
  `weixin_open` tinyint(4) DEFAULT '0',
  `qq_open` tinyint(4) DEFAULT '0',
  `weixin_qrcode` varchar(255) DEFAULT NULL,
  `qq_qrcode` varchar(255) DEFAULT NULL,
  `weixin_ck` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_codepay_applist
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_codepay_auth
-- ----------------------------
DROP TABLE IF EXISTS `plugin_codepay_auth`;
CREATE TABLE `plugin_codepay_auth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `status` tinyint(3) DEFAULT '0',
  `create_at` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_codepay_auth
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_codepay_order
-- ----------------------------
DROP TABLE IF EXISTS `plugin_codepay_order`;
CREATE TABLE `plugin_codepay_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `appid` int(11) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_codepay_order
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_cross
-- ----------------------------
DROP TABLE IF EXISTS `plugin_cross`;
CREATE TABLE `plugin_cross` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `platform` varchar(255) DEFAULT NULL,
  `protocol` varchar(255) DEFAULT NULL,
  `domain` varchar(255) DEFAULT NULL,
  `create_at` int(11) DEFAULT NULL,
  `goods_count` int(11) DEFAULT '0',
  `expire_at` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `params` text,
  `token` text,
  `balance` decimal(10,3) DEFAULT '0.000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_cross
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_cross_order
-- ----------------------------
DROP TABLE IF EXISTS `plugin_cross_order`;
CREATE TABLE `plugin_cross_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `trade_no` varchar(255) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `goods_name` varchar(100) DEFAULT NULL,
  `paytype` int(11) DEFAULT NULL,
  `channel_id` int(11) DEFAULT NULL,
  `channel_account_id` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '0' COMMENT '1已支付  2取消  3退款',
  `create_at` int(11) DEFAULT NULL,
  `success_at` int(11) DEFAULT NULL,
  `total_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `cross_params` int(11) DEFAULT '0' COMMENT '个数或天数',
  `cross_type` tinyint(4) DEFAULT '0' COMMENT '1个数 2天数',
  `cross_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_cross_order
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_crossauth
-- ----------------------------
DROP TABLE IF EXISTS `plugin_crossauth`;
CREATE TABLE `plugin_crossauth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `status` tinyint(3) DEFAULT '0',
  `create_at` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_crossauth
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_custompay_auth
-- ----------------------------
DROP TABLE IF EXISTS `plugin_custompay_auth`;
CREATE TABLE `plugin_custompay_auth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `status` tinyint(3) DEFAULT '0',
  `create_at` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_custompay_auth
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_custompay_order
-- ----------------------------
DROP TABLE IF EXISTS `plugin_custompay_order`;
CREATE TABLE `plugin_custompay_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `trade_no` varchar(255) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `goods_name` varchar(100) DEFAULT NULL,
  `paytype` int(11) DEFAULT NULL,
  `channel_id` int(11) DEFAULT NULL,
  `channel_account_id` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '0' COMMENT '1已支付  2取消  3退款',
  `create_at` int(11) DEFAULT NULL,
  `success_at` int(11) DEFAULT NULL,
  `total_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `money` decimal(11,2) DEFAULT '0.00',
  `recharge_type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_custompay_order
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_guide
-- ----------------------------
DROP TABLE IF EXISTS `plugin_guide`;
CREATE TABLE `plugin_guide` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `subtitle` varchar(100) DEFAULT NULL,
  `subtitle_line1` varchar(100) DEFAULT NULL,
  `subtitle_line2` varchar(100) DEFAULT NULL,
  `buttons` text,
  `theme_id` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '0' COMMENT '开启，关闭',
  `update_at` int(10) DEFAULT NULL,
  `logo_open` tinyint(4) DEFAULT '1' COMMENT 'logo开关',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_guide
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_guide_theme
-- ----------------------------
DROP TABLE IF EXISTS `plugin_guide_theme`;
CREATE TABLE `plugin_guide_theme` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `video` text,
  `background` text,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `user_id` int(11) DEFAULT '0',
  `update_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_guide_theme
-- ----------------------------
INSERT INTO `plugin_guide_theme` VALUES ('1', '初音', 'http://s7.huoying666.com/video/20180705/de0936c7bdd99f5509398365af915637/1530768905c5a15575883fcd15.mp4_last.mp4', 'https://img.alicdn.com/imgextra/i1/1021358488/O1CN01eN1fUD2CZYO6YlGar_!!1021358488.jpg', '1', '0', null);
INSERT INTO `plugin_guide_theme` VALUES ('2', '林允儿', 'http://s7.huoying666.com/video/20180318/e380c690cebb1e8377405b66af6855ed/15213064516129f04599be2f70.mp4_pre.mp4', 'http://img.huoying666.com/forum/201803/29/182634b8k9f3bk4z3n9zkp.png.thumb.jpg', '1', '0', null);
INSERT INTO `plugin_guide_theme` VALUES ('3', '2b姐姐尼尔', 'https://s7.huoying666.com/video/20210119/efe6ddb0a3917f0b0438b7aaccb5b7d8/16110693238c1524463e66b983.mp4_pre.mp4', 'https://s7.huoying666.com/video/20210119/efe6ddb0a3917f0b0438b7aaccb5b7d8/16110693231.jpg', '1', '0', null);
INSERT INTO `plugin_guide_theme` VALUES ('4', 'Aeolion无缝循环', 'https://s7.huoying666.com/video/20171016/4d556f631704ad376ca023434780fc17/150811897074f60c9efa0af52d.mp4_pre.mp4', 'https://s7.huoying666.com/video/20171016/4d556f631704ad376ca023434780fc17/15081189704.jpg', '1', '0', null);
INSERT INTO `plugin_guide_theme` VALUES ('5', '流浪地球', 'https://s7.huoying666.com/video/20190324/b6d78939813f0699cb0cefae291e8494/15533978883161b052490d9834.mp4_pre.mp4', 'https://s7.huoying666.com/video/20190324/b6d78939813f0699cb0cefae291e8494/15533978885.jpg', '1', '0', null);
INSERT INTO `plugin_guide_theme` VALUES ('6', '穿越山脉', 'https://s7.huoying666.com/video/20170913/ff0f16e501acbfd0af8faca63b287a95/1505301123d67ac5fe60daff97.mp4_pre.mp4', 'https://s7.huoying666.com/video/20170913/ff0f16e501acbfd0af8faca63b287a95/15053011234.jpg', '1', '0', null);
INSERT INTO `plugin_guide_theme` VALUES ('7', '数据壁纸', 'https://s7.huoying666.com/video/20180321/5d88dfee7b640f6c7a98c56cc71f6d7b/15216054196788b3276f3805cd.mp4_pre.mp4', 'https://s7.huoying666.com/video/20180321/5d88dfee7b640f6c7a98c56cc71f6d7b/15216054191.jpg', '1', '0', null);
INSERT INTO `plugin_guide_theme` VALUES ('8', '黑客专用', 'https://s7.huoying666.com/video/20171024/0f08bd0163d9d44893777a25d62e8dfd/1508835758af1cfcbd2957f513.mp4_pre.mp4', 'https://s7.huoying666.com/video/20171024/0f08bd0163d9d44893777a25d62e8dfd/15088357582.jpg', '1', '0', null);
INSERT INTO `plugin_guide_theme` VALUES ('9', '舔屏八哥', 'https://s7.huoying666.com/video/20180525/8975788c4afb4e41aa7274d17ee38a0b/1527229400a06364c27ac1da85.mp4_pre.mp4', 'https://s7.huoying666.com/video/20180525/8975788c4afb4e41aa7274d17ee38a0b/15272294005.jpg', '1', '0', null);
INSERT INTO `plugin_guide_theme` VALUES ('10', '喵斯快跑', 'https://s7.huoying666.com/video/20201117/387c693c5050c6041fd86950dffb277b/1605612051cd3b9b03b5be42ac.mp4_pre.mp4', 'https://s7.huoying666.com/video/20201117/387c693c5050c6041fd86950dffb277b/16056120515.jpg', '1', '0', null);
INSERT INTO `plugin_guide_theme` VALUES ('11', 'Alon', 'https://s7.huoying666.com/video/20170909/2601a1f0a3cd480ecce801c664965e15/15049344881128f579fc3427ea.mp4_pre.mp4', 'https://s7.huoying666.com/video/20170909/2601a1f0a3cd480ecce801c664965e15/15049344881.jpg', '1', '0', null);
INSERT INTO `plugin_guide_theme` VALUES ('12', '韩国主播徐雅', 'https://s7.huoying666.com/video/20200415/979c7e5ec07440ad6a14fa179a861a58/15869039973dd8701498a34318.mp4_pre.mp4', 'https://s7.huoying666.com/video/20200415/979c7e5ec07440ad6a14fa179a861a58/15869039974.jpg', '1', '0', null);

-- ----------------------------
-- Table structure for plugin_merchantauth
-- ----------------------------
DROP TABLE IF EXISTS `plugin_merchantauth`;
CREATE TABLE `plugin_merchantauth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `card_name` varchar(255) DEFAULT NULL,
  `card_number` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `card_img` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `create_at` int(11) DEFAULT NULL,
  `auth_type` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_merchantauth
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_merchantauth_order
-- ----------------------------
DROP TABLE IF EXISTS `plugin_merchantauth_order`;
CREATE TABLE `plugin_merchantauth_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `trade_no` varchar(255) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `goods_name` varchar(100) DEFAULT NULL,
  `paytype` int(11) DEFAULT NULL,
  `channel_id` int(11) DEFAULT NULL,
  `channel_account_id` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '0' COMMENT '1已支付  2取消  3退款',
  `create_at` int(11) DEFAULT NULL,
  `success_at` int(11) DEFAULT NULL,
  `params` text COMMENT 'json格式',
  `auth_status` tinyint(4) DEFAULT '0' COMMENT '0未认证 2失败  1成功',
  `auth_result` varchar(255) DEFAULT NULL,
  `total_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_merchantauth_order
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_paysafe
-- ----------------------------
DROP TABLE IF EXISTS `plugin_paysafe`;
CREATE TABLE `plugin_paysafe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `channel_id` int(11) NOT NULL,
  `min_money` decimal(10,2) NOT NULL DEFAULT '0.00',
  `max_money` decimal(10,2) NOT NULL DEFAULT '0.00',
  `open_random` tinyint(4) NOT NULL DEFAULT '0',
  `random_money` decimal(10,2) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `update_at` int(11) DEFAULT NULL,
  `random_type` tinyint(4) DEFAULT '0',
  `random_rounding` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_paysafe
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_paysafe_ipblack
-- ----------------------------
DROP TABLE IF EXISTS `plugin_paysafe_ipblack`;
CREATE TABLE `plugin_paysafe_ipblack` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) DEFAULT NULL,
  `create_at` int(11) DEFAULT NULL,
  `scene` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_paysafe_ipblack
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_paysafe_ipvisit
-- ----------------------------
DROP TABLE IF EXISTS `plugin_paysafe_ipvisit`;
CREATE TABLE `plugin_paysafe_ipvisit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) DEFAULT NULL,
  `create_at` int(11) DEFAULT NULL,
  `scene` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_paysafe_ipvisit
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_poolauth
-- ----------------------------
DROP TABLE IF EXISTS `plugin_poolauth`;
CREATE TABLE `plugin_poolauth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `status` tinyint(3) DEFAULT '0',
  `create_at` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_poolauth
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_punish
-- ----------------------------
DROP TABLE IF EXISTS `plugin_punish`;
CREATE TABLE `plugin_punish` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `complaint_count` int(11) DEFAULT '0' COMMENT '用于累积',
  `order_count` int(11) DEFAULT '0',
  `update_at` int(11) DEFAULT NULL,
  `history_count` int(11) DEFAULT '0',
  `history_money` decimal(10,3) DEFAULT '0.000',
  `is_white` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_punish
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_shopdiy
-- ----------------------------
DROP TABLE IF EXISTS `plugin_shopdiy`;
CREATE TABLE `plugin_shopdiy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `theme_id` int(11) DEFAULT NULL,
  `update_at` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_shopdiy
-- ----------------------------

-- ----------------------------
-- Table structure for plugin_shopdiy_theme
-- ----------------------------
DROP TABLE IF EXISTS `plugin_shopdiy_theme`;
CREATE TABLE `plugin_shopdiy_theme` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `resource` text,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `user_id` int(11) DEFAULT '0',
  `update_at` int(11) DEFAULT NULL,
  `resource_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0视频 1图片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_shopdiy_theme
-- ----------------------------
INSERT INTO `plugin_shopdiy_theme` VALUES ('1', '萝莉剑豪', 'http://alimov2.a.yximgs.com/upic/2021/04/13/16/BMjAyMTA0MTMxNjQxMzRfMjMzNDMxODUwNF80Nzc1MTk4NDMxMl8wXzM=_B2b2563ac973ac1e901783dfc9539c244.mp4', '1', '0', '1618318475', '0');
INSERT INTO `plugin_shopdiy_theme` VALUES ('2', '慵懒', 'http://alimov2.a.yximgs.com/upic/2021/04/13/18/BMjAyMTA0MTMxODAyNDVfMjMzNDMxODUwNF80Nzc1NjIxMjIyNl8wXzM=_Bdce2231096b349a67d9bca3f34e5f118.mp4', '1', '0', '1618318316', '0');
INSERT INTO `plugin_shopdiy_theme` VALUES ('3', '猫', 'http://jsmov2.a.yximgs.com/upic/2021/04/13/21/BMjAyMTA0MTMyMTEwMTNfMjMzNDMxODUwNF80Nzc2ODM2MDk2OF8wXzM=_Ba43228b62796ca6566428f7348cb6236.mp4', '1', '0', '1618319477', '0');
INSERT INTO `plugin_shopdiy_theme` VALUES ('4', '極楽浄土', 'http://jsmov.a.yximgs.com/upic/2021/04/13/21/BMjAyMTA0MTMyMTM5MDlfMjMzNDMxODUwNF80Nzc3MDMwNTU0NV8wXzM=_Bd4f298d63510af0d6e46064025ea14d3.mp4', '1', '0', '1618321334', '0');
INSERT INTO `plugin_shopdiy_theme` VALUES ('5', '赛博朋克', 'http://alimov6.a.yximgs.com/upic/2021/04/13/21/BMjAyMTA0MTMyMTU5MjRfMjMzNDMxODUwNF80Nzc3MTU2MDg3MF8wXzM=_B3090c0da1165cd7b56e989e207654aeb.mp4', '1', '0', '1618322824', '0');
INSERT INTO `plugin_shopdiy_theme` VALUES ('6', 'SSOATV', 'http://bdmov.a.yximgs.com/upic/2021/04/13/22/BMjAyMTA0MTMyMjIyMDhfMjMzNDMxODUwNF80Nzc3Mjg0NjI3N18wXzM=_B8bf1093a78a090540b0e688dbaf00b6c.mp4', '1', '0', '1618323774', '0');
INSERT INTO `plugin_shopdiy_theme` VALUES ('7', 'Futari', 'http://bdmov.a.yximgs.com/upic/2021/04/13/22/BMjAyMTA0MTMyMjMwNTlfMjMzNDMxODUwNF80Nzc3MzMwNjI5NF8wXzM=_B241bba725af2df3290c0068c45e7409c.mp4', '1', '0', '1618324321', '0');
INSERT INTO `plugin_shopdiy_theme` VALUES ('8', 'Reimu灵梦', 'http://alimov2.a.yximgs.com/upic/2021/04/13/22/BMjAyMTA0MTMyMjM5MTZfMjMzNDMxODUwNF80Nzc3MzcxMzk0Nl8wXzM=_B27f967d66ddc5795ede6709fa65fbc75.mp4', '1', '0', '1618324837', '0');
INSERT INTO `plugin_shopdiy_theme` VALUES ('9', '流浪地球', 'http://alimov2.a.yximgs.com/upic/2021/04/13/22/BMjAyMTA0MTMyMjQ4NTdfMjMzNDMxODUwNF80Nzc3NDE2MTQ4MF8wXzM=_Bd07bdb8f0192eff6906a479bfb639a08.mp4', '1', '0', '1618325390', '0');
INSERT INTO `plugin_shopdiy_theme` VALUES ('10', '少女前线', 'http://jsmov2.a.yximgs.com/upic/2021/04/13/22/BMjAyMTA0MTMyMjU3MTFfMjMzNDMxODUwNF80Nzc3NDUxODY5Nl8wXzM=_Be4618ff25c0f488d36a98f779e9100eb.mp4', '1', '0', '1618325902', '0');
INSERT INTO `plugin_shopdiy_theme` VALUES ('11', '鲸落', 'http://jsmov2.a.yximgs.com/upic/2021/04/13/23/BMjAyMTA0MTMyMzA5MDVfMjMzNDMxODUwNF80Nzc3NDk5MzYzNV8wXzM=_B5e925390057adceeb80fb742d906dd17.mp4', '1', '0', '1618326578', '0');

-- ----------------------------
-- Table structure for plugin_tradetask
-- ----------------------------
DROP TABLE IF EXISTS `plugin_tradetask`;
CREATE TABLE `plugin_tradetask` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `target` decimal(10,2) NOT NULL DEFAULT '0.00',
  `reward` decimal(10,2) NOT NULL DEFAULT '0.00',
  `duration` int(11) NOT NULL DEFAULT '0',
  `desc` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_tradetask
-- ----------------------------
INSERT INTO `plugin_tradetask` VALUES ('1', '青铜流水奖励', '15000.00', '108.00', '30', '商户在一个月内完成任务即可获得108现金红包奖励');
INSERT INTO `plugin_tradetask` VALUES ('2', '白银流水挑战', '35000.00', '208.00', '30', '商户在一个月内完成任务即可获得208现金红包奖励');
INSERT INTO `plugin_tradetask` VALUES ('3', '王者流水奖励', '80000.00', '388.00', '30', '商户在一个月内完成任务即可获得388现金红包奖励');
INSERT INTO `plugin_tradetask` VALUES ('4', '至尊流水奖励', '180000.00', '888.00', '30', '商户在一个月内完成任务即可获得888现金红包奖励');

-- ----------------------------
-- Table structure for plugin_tradetask_order
-- ----------------------------
DROP TABLE IF EXISTS `plugin_tradetask_order`;
CREATE TABLE `plugin_tradetask_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0未完成 1已完成  -1放弃',
  `expire_at` int(11) DEFAULT NULL,
  `create_at` int(11) DEFAULT '0',
  `success_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plugin_tradetask_order
-- ----------------------------

-- ----------------------------
-- Table structure for rate_group
-- ----------------------------
DROP TABLE IF EXISTS `rate_group`;
CREATE TABLE `rate_group` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL COMMENT '分组名',
  `create_at` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `delete_at` int(10) unsigned DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='费率分组表';

-- ----------------------------
-- Records of rate_group
-- ----------------------------
INSERT INTO `rate_group` VALUES ('1', '默认分组', '1619544090', null);

-- ----------------------------
-- Table structure for rate_group_rule
-- ----------------------------
DROP TABLE IF EXISTS `rate_group_rule`;
CREATE TABLE `rate_group_rule` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL COMMENT '分组 ID',
  `channel_id` int(11) NOT NULL COMMENT '渠道 ID',
  `rate` decimal(10,4) NOT NULL DEFAULT '0.0000' COMMENT '渠道费率',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态 1：开启 0：关闭',
  PRIMARY KEY (`id`),
  KEY `group_id` (`group_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='分组费率规则';

-- ----------------------------
-- Records of rate_group_rule
-- ----------------------------

-- ----------------------------
-- Table structure for rate_group_user
-- ----------------------------
DROP TABLE IF EXISTS `rate_group_user`;
CREATE TABLE `rate_group_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL COMMENT '分组 ID',
  `user_id` int(11) NOT NULL COMMENT '用户 ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='分组内用户表';

-- ----------------------------
-- Records of rate_group_user
-- ----------------------------

-- ----------------------------
-- Table structure for shop_iplist
-- ----------------------------
DROP TABLE IF EXISTS `shop_iplist`;
CREATE TABLE `shop_iplist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) DEFAULT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `create_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop_iplist
-- ----------------------------

-- ----------------------------
-- Table structure for sms_code
-- ----------------------------
DROP TABLE IF EXISTS `sms_code`;
CREATE TABLE `sms_code` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `mobile` varchar(15) NOT NULL DEFAULT '' COMMENT '手机号',
  `screen` varchar(30) NOT NULL DEFAULT '' COMMENT '场景',
  `code` char(6) NOT NULL DEFAULT '' COMMENT '验证码',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态：0：未使用 1：已使用',
  `create_at` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `create_ip` varchar(255) NOT NULL DEFAULT '' COMMENT '请求 ip',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sms_code
-- ----------------------------

-- ----------------------------
-- Table structure for system_auth
-- ----------------------------
DROP TABLE IF EXISTS `system_auth`;
CREATE TABLE `system_auth` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL COMMENT '权限名称',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '状态(1:禁用,2:启用)',
  `sort` smallint(6) unsigned DEFAULT '0' COMMENT '排序权重',
  `desc` varchar(255) DEFAULT NULL COMMENT '备注说明',
  `create_by` bigint(11) unsigned DEFAULT '0' COMMENT '创建人',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_system_auth_title` (`title`) USING BTREE,
  KEY `index_system_auth_status` (`status`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统权限表';

-- ----------------------------
-- Records of system_auth
-- ----------------------------

-- ----------------------------
-- Table structure for system_auth_node
-- ----------------------------
DROP TABLE IF EXISTS `system_auth_node`;
CREATE TABLE `system_auth_node` (
  `auth` bigint(20) unsigned DEFAULT NULL COMMENT '角色ID',
  `node` varchar(200) DEFAULT NULL COMMENT '节点路径',
  KEY `index_system_auth_auth` (`auth`) USING BTREE,
  KEY `index_system_auth_node` (`node`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色与节点关系表';

-- ----------------------------
-- Records of system_auth_node
-- ----------------------------

-- ----------------------------
-- Table structure for system_config
-- ----------------------------
DROP TABLE IF EXISTS `system_config`;
CREATE TABLE `system_config` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL COMMENT '配置编码',
  `value` mediumtext COMMENT '配置值',
  PRIMARY KEY (`id`),
  KEY `index_system_config_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=389 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='系统参数配置';

-- ----------------------------
-- Records of system_config
-- ----------------------------
INSERT INTO `system_config` VALUES ('148', 'site_name', '自助发卡网');
INSERT INTO `system_config` VALUES ('149', 'site_copy', '鲸发卡 jingfaka.com © 2018 - 2020 版权');
INSERT INTO `system_config` VALUES ('164', 'storage_type', 'local');
INSERT INTO `system_config` VALUES ('165', 'storage_qiniu_is_https', '1');
INSERT INTO `system_config` VALUES ('166', 'storage_qiniu_bucket', 'static');
INSERT INTO `system_config` VALUES ('167', 'storage_qiniu_domain', 'static.ctolog.com');
INSERT INTO `system_config` VALUES ('168', 'storage_qiniu_access_key', 'wuwei');
INSERT INTO `system_config` VALUES ('169', 'storage_qiniu_secret_key', 'wuwei');
INSERT INTO `system_config` VALUES ('170', 'storage_qiniu_region', '华东');
INSERT INTO `system_config` VALUES ('173', 'app_name', '发卡网');
INSERT INTO `system_config` VALUES ('176', 'browser_icon', '/static/upload/fd395269cf4b26da/e86a21489408240c.png');
INSERT INTO `system_config` VALUES ('184', 'wechat_appid', '.');
INSERT INTO `system_config` VALUES ('185', 'wechat_appsecret', '.');
INSERT INTO `system_config` VALUES ('186', 'wechat_token', '.');
INSERT INTO `system_config` VALUES ('187', 'wechat_encodingaeskey', '.');
INSERT INTO `system_config` VALUES ('199', 'storage_oss_bucket', '');
INSERT INTO `system_config` VALUES ('200', 'storage_oss_keyid', '');
INSERT INTO `system_config` VALUES ('201', 'storage_oss_secret', '');
INSERT INTO `system_config` VALUES ('202', 'storage_oss_domain', '');
INSERT INTO `system_config` VALUES ('203', 'storage_oss_is_https', '1');
INSERT INTO `system_config` VALUES ('204', 'sms_channel', 'alidayu');
INSERT INTO `system_config` VALUES ('205', 'smsbao_user', '.');
INSERT INTO `system_config` VALUES ('206', 'smsbao_pass', '.');
INSERT INTO `system_config` VALUES ('207', 'smsbao_signature', '【发卡网】');
INSERT INTO `system_config` VALUES ('208', 'alidayu_key', '.');
INSERT INTO `system_config` VALUES ('209', 'alidayu_secret', '.');
INSERT INTO `system_config` VALUES ('210', 'alidayu_smstpl', '.');
INSERT INTO `system_config` VALUES ('211', 'alidayu_signature', '.');
INSERT INTO `system_config` VALUES ('212', 'yixin_sms_user', '.');
INSERT INTO `system_config` VALUES ('213', 'yixin_sms_pass', '.');
INSERT INTO `system_config` VALUES ('214', 'yixin_sms_signature', '.');
INSERT INTO `system_config` VALUES ('215', 'email_name', '自动发卡网');
INSERT INTO `system_config` VALUES ('216', 'email_smtp', 'smtp.qq.com');
INSERT INTO `system_config` VALUES ('217', 'email_port', '465');
INSERT INTO `system_config` VALUES ('218', 'email_user', '.');
INSERT INTO `system_config` VALUES ('219', 'email_pass', '.');
INSERT INTO `system_config` VALUES ('220', 'cash_min_money', '10');
INSERT INTO `system_config` VALUES ('221', 'transaction_min_fee', '0.04');
INSERT INTO `system_config` VALUES ('222', 'cash_fee_type', '1');
INSERT INTO `system_config` VALUES ('223', 'cash_fee', '2');
INSERT INTO `system_config` VALUES ('224', 'spread_rebate_rate', '0.2');
INSERT INTO `system_config` VALUES ('225', 'site_keywords', '自动发卡网,自动发卡,自动发卡平台,卡密寄售,自动发卡平台,发卡平台,自动发卡,发卡,发卡网');
INSERT INTO `system_config` VALUES ('226', 'site_desc', '自动发卡网是一款用于软件充值等虚拟卡密24小时在线交易的自动发卡平台,对比其他自动发卡平台费率低,功能全,服务器安全稳定.发卡平台就选自动发卡网！');
INSERT INTO `system_config` VALUES ('227', 'site_status', '1');
INSERT INTO `system_config` VALUES ('228', 'site_subtitle', '极受欢迎的虚拟卡密自动发卡网平台');
INSERT INTO `system_config` VALUES ('229', 'site_close_tips', '站点维护中');
INSERT INTO `system_config` VALUES ('230', 'complaint_limit_num', '99');
INSERT INTO `system_config` VALUES ('231', 'cash_status', '1');
INSERT INTO `system_config` VALUES ('232', 'cash_close_tips', '满50每天12点自动结算，无须手动结算。');
INSERT INTO `system_config` VALUES ('233', 'cash_limit_time_start', '0');
INSERT INTO `system_config` VALUES ('234', 'cash_limit_time_end', '23');
INSERT INTO `system_config` VALUES ('235', 'cash_limit_num', '3');
INSERT INTO `system_config` VALUES ('236', 'cash_limit_num_tips', '已达到今日最多提现次数！');
INSERT INTO `system_config` VALUES ('237', 'site_info_tel', 'QQ88888888');
INSERT INTO `system_config` VALUES ('238', 'site_info_qq', '88888888');
INSERT INTO `system_config` VALUES ('239', 'site_info_address', '哈尔滨市道外区');
INSERT INTO `system_config` VALUES ('240', 'site_info_email', 'admin@admin.com');
INSERT INTO `system_config` VALUES ('241', 'site_info_copyright', 'Copyright © 2018-2020 自动发卡网 All rights reserved. 版权所有');
INSERT INTO `system_config` VALUES ('242', 'site_info_icp', 'ICP备xxx号');
INSERT INTO `system_config` VALUES ('243', 'site_domain', 'http://www.demo.com/');
INSERT INTO `system_config` VALUES ('244', 'site_domain_res', '/static');
INSERT INTO `system_config` VALUES ('245', 'site_register_verify', '1');
INSERT INTO `system_config` VALUES ('246', 'site_register_status', '1');
INSERT INTO `system_config` VALUES ('247', 'site_register_smscode_status', '0');
INSERT INTO `system_config` VALUES ('248', 'site_wordfilter_status', '1');
INSERT INTO `system_config` VALUES ('249', 'site_wordfilter_danger', '习近平|毛泽东|胡锦涛|江泽民|援交|傻逼|二逼|SB|脑残!111|徐才厚|郭伯雄|高清视频|色色网站|黄色|小视频|支付宝套现|会员代充|Q名片赞|毒品|博彩网站|赌博网站|\n');
INSERT INTO `system_config` VALUES ('250', 'disabled_domains', 'www|ftp|bbs|blog|tes');
INSERT INTO `system_config` VALUES ('251', 'site_domain_short', 'Suo');
INSERT INTO `system_config` VALUES ('252', 'storage_local_exts', 'ico,jpg,jpeg,gif,png,apk,ipa');
INSERT INTO `system_config` VALUES ('253', 'site_logo', '/static/upload/3e67c4c4471199b5/1789c3f5adf310f4.png');
INSERT INTO `system_config` VALUES ('254', 'site_shop_domain', 'http://www.demo.com');
INSERT INTO `system_config` VALUES ('255', 'yixin_sms_cost', '0.1');
INSERT INTO `system_config` VALUES ('256', 'smsbao_cost', '0.1');
INSERT INTO `system_config` VALUES ('257', 'alidayu_cost', '0.1');
INSERT INTO `system_config` VALUES ('259', '1cloudsp_key', '.');
INSERT INTO `system_config` VALUES ('260', '1cloudsp_secret', '.');
INSERT INTO `system_config` VALUES ('261', '1cloudsp_smstpl', '.');
INSERT INTO `system_config` VALUES ('262', '1cloudsp_signature', '.');
INSERT INTO `system_config` VALUES ('263', '1cloudsp_cost', '.');
INSERT INTO `system_config` VALUES ('264', '253sms_key', '.');
INSERT INTO `system_config` VALUES ('265', '253sms_secret', '.');
INSERT INTO `system_config` VALUES ('266', '253sms_signature', '.');
INSERT INTO `system_config` VALUES ('267', '253sms_cost', '.');
INSERT INTO `system_config` VALUES ('268', 'ip_register_limit', '5');
INSERT INTO `system_config` VALUES ('269', 'is_google_auth', '0');
INSERT INTO `system_config` VALUES ('270', 'sms_error_limit', '10');
INSERT INTO `system_config` VALUES ('271', 'sms_error_time', '10');
INSERT INTO `system_config` VALUES ('272', 'wrong_password_times', '10');
INSERT INTO `system_config` VALUES ('273', 'site_statistics', '');
INSERT INTO `system_config` VALUES ('274', 'admin_login_path', 'admin');
INSERT INTO `system_config` VALUES ('276', 'announce_push', '1');
INSERT INTO `system_config` VALUES ('277', 'spread_reward', '0');
INSERT INTO `system_config` VALUES ('278', 'spread_reward_money', '0.2');
INSERT INTO `system_config` VALUES ('279', 'spread_invite_code', '0');
INSERT INTO `system_config` VALUES ('282', 'wx_auto_login', '0');
INSERT INTO `system_config` VALUES ('283', 'is_need_invite_code', '0');
INSERT INTO `system_config` VALUES ('284', 'site_register_code_type', 'email');
INSERT INTO `system_config` VALUES ('285', 'sms_notify_channel', 'alidayu');
INSERT INTO `system_config` VALUES ('286', 'merchant_logo', '/static/upload/ac4d15de82abd8a1/b8fd85c7e2f11e07.png');
INSERT INTO `system_config` VALUES ('287', 'goods_min_price', '0');
INSERT INTO `system_config` VALUES ('288', 'goods_max_price', '10000');
INSERT INTO `system_config` VALUES ('291', 'auto_cash', '1');
INSERT INTO `system_config` VALUES ('292', 'auto_cash_time', '0');
INSERT INTO `system_config` VALUES ('293', 'cash_type', '[\"1\",\"2\",\"3\"]');
INSERT INTO `system_config` VALUES ('294', 'auto_cash_money', '50');
INSERT INTO `system_config` VALUES ('295', 'auto_cash_fee_type', '1');
INSERT INTO `system_config` VALUES ('296', 'auto_cash_fee', '0');
INSERT INTO `system_config` VALUES ('297', 'sms_complaint_channel', 'alidayu');
INSERT INTO `system_config` VALUES ('298', 'alidayu_complaint_smstpl', '.');
INSERT INTO `system_config` VALUES ('299', '1cloudsp_complaint_smstpl', '.');
INSERT INTO `system_config` VALUES ('300', 'order_query_chkcode', '0');
INSERT INTO `system_config` VALUES ('301', 'sms_complaint_notify_channel', 'alidayu');
INSERT INTO `system_config` VALUES ('302', 'alidayu_complaint_notify_smstpl', '.');
INSERT INTO `system_config` VALUES ('303', 'alidayu_order_smstpl', '.');
INSERT INTO `system_config` VALUES ('304', '1cloudsp_complaint_notify_smstpl', '.');
INSERT INTO `system_config` VALUES ('305', '1cloudsp_order_smstpl', '.');
INSERT INTO `system_config` VALUES ('306', 'wechat_stock_template', '.');
INSERT INTO `system_config` VALUES ('307', 'wechat_sell_template', '.');
INSERT INTO `system_config` VALUES ('308', 'order_trade_no_type', '1');
INSERT INTO `system_config` VALUES ('309', 'order_trade_no_profix', 'FK');
INSERT INTO `system_config` VALUES ('310', 'login_auth', '1');
INSERT INTO `system_config` VALUES ('311', 'login_auth_type', '1');
INSERT INTO `system_config` VALUES ('312', 'buy_protocol', '&lt;p&gt;&lt;strong&gt;&lt;span style=&quot;color:#ff6600;&quot;&gt;&lt;span style=&quot;font-size:18px;&quot;&gt;温馨提示：本站不提供任何担保、私下交易被骗一律与本站无关。&lt;/span&gt;&lt;/span&gt;&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span style=&quot;color:#ff00ff;&quot;&gt;1、本平台仅提供自动发卡、寄售服务，本平台非销售商，建议先咨询卖家软件使用方法和用途后购买，非卡密问题本站不予受理售后争议。&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;span style=&quot;color:#27ae60;&quot;&gt;2、平台提供卡密查询时间为1个月（购买后请自行保存）如遇假卡/欺诈/涉黄/赌/等违规商品请当天24点前与我们平台客服QQ联系举报。&lt;/span&gt;&lt;/p&gt;\n\n&lt;p&gt;--------------------------------------------&lt;/p&gt;\n\n&lt;p&gt;&lt;span style=&quot;font-size:16px;&quot;&gt;&lt;strong&gt;&lt;span style=&quot;color:#ff0000;&quot;&gt;防骗提醒&lt;/span&gt;&lt;/strong&gt;&lt;span style=&quot;color:#ff0000;&quot;&gt;：&lt;/span&gt;&lt;/span&gt;&lt;span style=&quot;color:#6600ff;&quot;&gt;1.卡密内容为&quot;联系QQ取卡或者QQ群拿货&quot; 2.以各种理由推脱到第二天发货 3.商品有问题，卖家不售后 4.承诺充值返现 5.购买的商品为实物，需要快递发货的。请及时联系我们QQ客服：&lt;/span&gt;&lt;/p&gt;\n');
INSERT INTO `system_config` VALUES ('313', 'site_info_tel_desc', '');
INSERT INTO `system_config` VALUES ('314', 'site_info_qq_desc', '');
INSERT INTO `system_config` VALUES ('317', 'fee_payer', '1');
INSERT INTO `system_config` VALUES ('318', 'available_email', '0');
INSERT INTO `system_config` VALUES ('319', 'idcard_auth_type', '0');
INSERT INTO `system_config` VALUES ('320', 'idcard_auth_path', '');
INSERT INTO `system_config` VALUES ('321', 'idcard_auth_appcode', '');
INSERT INTO `system_config` VALUES ('322', 'idcard_auth_status_field', 'status');
INSERT INTO `system_config` VALUES ('323', 'idcard_auth_status_code', '01');
INSERT INTO `system_config` VALUES ('324', 'settlement_type', '1');
INSERT INTO `system_config` VALUES ('325', 'email_smtp1', 'smtp.qq.com');
INSERT INTO `system_config` VALUES ('326', 'email_port1', '465');
INSERT INTO `system_config` VALUES ('327', 'email_user1', '.');
INSERT INTO `system_config` VALUES ('328', 'email_pass1', '.');
INSERT INTO `system_config` VALUES ('329', 'email_smtp2', 'smtp.qq.com');
INSERT INTO `system_config` VALUES ('330', 'email_port2', '465');
INSERT INTO `system_config` VALUES ('331', 'email_user2', '.');
INSERT INTO `system_config` VALUES ('332', 'email_pass2', '.');
INSERT INTO `system_config` VALUES ('333', 'sina_app_key', '.');
INSERT INTO `system_config` VALUES ('334', 'sina_app_secret', '.');
INSERT INTO `system_config` VALUES ('335', 'suo_app_key', '.');
INSERT INTO `system_config` VALUES ('336', 'sina_app_key', '.');
INSERT INTO `system_config` VALUES ('337', 'sina_app_secret', '.');
INSERT INTO `system_config` VALUES ('339', 'index_theme_list_pc', '[\"land1\",\"land2\",\"land3\"]');
INSERT INTO `system_config` VALUES ('340', 'index_theme_mobile', 'app');
INSERT INTO `system_config` VALUES ('341', 'index_theme_list_mobile', '[\"land1\",\"land2\",\"land3\",\"app\"]');
INSERT INTO `system_config` VALUES ('342', 'index_theme_pc', 'land3');
INSERT INTO `system_config` VALUES ('343', 'merchant_logo_sm', '/static/upload/66f9401118aeb58c/93890765b5ab93c2.png');
INSERT INTO `system_config` VALUES ('345', 'invite_code_get_url', 'http://www.baidu.com');
INSERT INTO `system_config` VALUES ('346', 'order_title_type', '1');
INSERT INTO `system_config` VALUES ('347', 'order_title_profix', '测试');
INSERT INTO `system_config` VALUES ('348', 'order_title_str', '自定义标题');
INSERT INTO `system_config` VALUES ('350', 'wechat_signin_template', '');
INSERT INTO `system_config` VALUES ('351', 'wechat_complaint_template', '');
INSERT INTO `system_config` VALUES ('352', 'wechat_cash_template', '');
INSERT INTO `system_config` VALUES ('353', 'wechat_notify', '0');
INSERT INTO `system_config` VALUES ('354', 'complaint_refund', '0');
INSERT INTO `system_config` VALUES ('355', 'agreement_read', '0');
INSERT INTO `system_config` VALUES ('356', 'tongji_baidu_key', '');
INSERT INTO `system_config` VALUES ('357', 'admin_auth_type', null);
INSERT INTO `system_config` VALUES ('358', 'glock', null);
INSERT INTO `system_config` VALUES ('359', 'glock_status', '');
INSERT INTO `system_config` VALUES ('360', 'merchant_invitecode_open', '1');
INSERT INTO `system_config` VALUES ('361', 'cash_weixinnotify_open', '1');
INSERT INTO `system_config` VALUES ('362', 'cash_emailnotify_open', '0');
INSERT INTO `system_config` VALUES ('363', 'complaint_qrcode', '0');
INSERT INTO `system_config` VALUES ('367', 'order_query_limitday', '3');
INSERT INTO `system_config` VALUES ('368', 'order_query_limitip', '0');
INSERT INTO `system_config` VALUES ('378', 'order_query_blackcontact', '12345678|123456789|1234567890|a123456789|123456|qq123456|abc123456|123456789a|WOAINI1314|11111111|123123123|88888888|111111111|147258369|987654321|1111111111|1qaz2wsx|789456123|iloveyou|qwertyuiop|asdfghjkl|1q2w3e4r|123456abc|qazwsxedc|abcd1234|123654789|aa123456|123321123|1234qwer|123456aa|123456123|999999999|741852963|963852741|qwer1234|qweasdzxc|asd123456|123456qq|3.1415926|asdf1234|111222333|147852369|111111|123698745|woaiwojia|123456987|zxcvbnm123|5845201314|1q2w3e4r5t|buzhidao|xiaoxiao|qwe123456|1357924680|yangyang|135792468|AS123456|147896325|888888|123123|123321|a123456|zxcvbnm|123456a|aaaaaaaa|11223344|password|87654321|12344321|31415926|asdasdasd|12121212|12341234|a12345678|asdfasdf|qwertyui|520520520|q1w2e3r4|1234abcd|1qazxsw2|1123581321|123456asd|woaini123|woshishui|12301230|1234554321|12369874|25257758|369258147|zhang123|woainima|woaini520|5845211314|12345678910|jingjing|tiantian|584131421|5841314520|yuanyuan|woailaopo|584131420|5201314|666666|1234567|654321|789456|woaini|112233|1314520|7758521|123|1|123654|520520|147258|aaaaaa|222222|abc123|110110|1111111|5211314|qazwsx|7758258|qwerty|456123|159357|521521|123qwe|456789|1314521|987654|asdfgh|123abc|qweasd|asdasd|qwe123|zxcvbn|asd123|1234560|qaz123|q123456|abcdefg|A12345|123asd|z123456|qweqwe|w123456|caonima|zxc123|123456q|aaa111|00000000|66666666|qqqqqqqq|000000000|0000000000|0123456789|110110110|22222222|a1234567|11112222|521521521|123qweasd|11235813|5201314520|100200300|qazwsx123|wocaonima|q123456789|9876543210|qaz123456|123456QWE|20082008|qq123123|000000|WOJIUSHIWO|sunshine|wodemima|a5201314|zhangwei|110120119|123456789q|woaini521|dongdong|13141314|20080808|14789632|aini1314|zhanglei|worinima|qq5201314|zhangjie|wangyang|love1314|584201314|0|121212|111222|131313|999999|555666|333333|100200|555555|12345|7777777|qqqqqq|zzzzzz|1234|778899|666888|123789|777777|201314|101010|168168|159753|123000|314159|789789|963852|qazqaz|369369|ffffff|131420|584520|741852|456852|131421|111|135246|110119|147852|321321|753951|211314|518518|456456|444444|windows|123457|336699|1111|258369|654123|147369|1q2w3e|119119|321654|7758520|520530|112358|564335|911911|951753|110120|135790|102030|258258|shmily|232323|111000|369258|520025|121314|251314|dddddd|709394|123465|721521|3344520|wwwwww|584521|loveyou|521125|142536|1230123|ssssss|a|332211|120120|3344521|124578|fuckyou|aaa123|112112|mnbvcxz|xxxxxx|nihaoma|134679|521314|321456|a111111|7895123|852456|520123|weiwei|qwaszx|qazxsw|q1w2e3|zxczxc|111111a|baobao|a123123|99999999|123456123456|55555555|asdfghjk|12345678A|321321321|12345600|123456654321|0987654321|z123456789|12345679|123456aaa|1233211234567|321654987|zxc123456|computer|superman|goodluck|a123456a|12qwaszx|12345qwert|aptx4869|77585210|74108520|7894561230|abcd123456|mingming|shanghai|wangjian|www123456|7758521521|qq123456789|25251325|wangjing|110119120|1314520520|nicholas|5201314a|wobuzhidao|xiaoqiang|16897168|longlong|xiaolong|shanshan|110120130|5841314521|zhangjian|qwqwqw|0000000|888999|1314|7654321|11111|ww111111|246810|222333|445566|333666|FOREVER|hao123456|585858|121121|212121|aaaaaaa|wang123|111qqq|159951|147147|maomao|235689|159159|feifei|beyond|898989|7788250|5203344|555888|1234566|a000000|7788521|122333|123456.|jiajia|123123a|wangwei|258456|q123123|520|woaiwoziji|xiaoyu|zhendeaini|asasas|jiushiaini|000000a|ms0083jxj|33333333|qweqweqwe|ffffffff|1234567a|aaa123456|qwerasdf|299792458|123456789.|8888888888|52013145201314|888888888|abc12345|a123123123|123456..|12312312|a1b2c3d4|abc123456789|1a2b3c4d|123456ab|li123456|qq000000|qw123456|w123456789|1234512345|456456456|ab123456|Q1W2E3R4T5|19491001|zz123456|123qwe123|77585217758521|1234567890123|123456as|chenchen|q1234567|123456qaz|qwert12345|52013140|3141592653|qweasd123|52013141314|wang123456|asdf123456|123456798|1234567899|liu123456|123456789abc|123456qw|123456abcd|74107410|ddzj39cb3|zx123456|20092009|nihao123|lxqqqqqq|woainiwoaini|19861212|liangliang|123456789123|13145201314520|eladnbin1104|19861015|123456zxc|qwe123qwe|5201314123|zhangyan|123456...|llllll|yj2009|476730751|007007|0123456|010203|686868|wan0425|666999|989898|000111|777888|787878|888666|000123|999888|234567|abcdef|123567|168888|181818|565656|13|mm123456|131425|012345|556677|0000|11|998877|198512|gggggg|789123|mmmmmm|198611|158158|1234561|198411|142857|winner|qq00000|198511|456321|198612|1q1q1q|119911|131415|wangyut2|808080|10203|7007|1.23457E+11|1230|123520|tiancai|110|dragon|7788414|qq1234|5213344|1122334|123456z|55555|1230456|1231230|5121314|1314159|2597758|wanglei|7788520|198610|770880|aa5201314|caonima123|2525775|1122|1233210|134679852|1.23456E+11|michael|asdzxc|1234568|asd|1314258|1001|a123321|asdf123|s123456|ww123456|1234569|1.23457E+12|7758991|pppppp|@qq.com|qqq123|l123456|qwert123|0.123456|369852|qwertyu|abc1234567|1111111111111111|hao123|abcd123|tingting|dearbook|code8925|zzzzzzzz|77777777|xiazhili|88771024|11111111111111111111|wwwwwwww|10101010|12345678A@|44444444|1122334455|12345612|P@ssw0rd|csdncsdn|05962514787|ssssssss|lilylily|dddddddd|zxczxczxc|369369369|aaaaaaaaa|abcdefgh|123789456|19830209|168168168|helloworld|aaaaaaaaaa|112233445566|zaq12wsx|xxxxxxxx|ds760206|123321123321|789789789|qq111111|13145200|a1111111|google250|123321aa|007007007|66668888|csdn.net|aaaa1111|maidoumaidou|z3255500|01234567|21212121|00001111|12345687|12348765|01020304|23232323|qkvmlia569|passw0rd|77585211|01010101|a11111111|aa123123|mmmmmmmm|qazqazqaz|200919ab|qazxswedc|19841010|20102010|666666666|111111aa|19841020|00000000000000000000|19810914|123456000|10203040|123123123123|12345abcde|13801001020|meiyoumima|518518518|5200251314|hahahaha|13131313|fa1681688|llllllll|19851010|asasasas|012345678|77889900|newhappy|23456789|12365478|1111qqqq|wangpeng|z1234567|w1234567|dgdg7234322|qqqq1111|1234asdf|1234567b|951ljb753|45612300|justdoit|q1111111|11111111a|qqqqqqqqq|19841028|911911911|11110000|19841021|microsoft|258258258|123454321|987456321|qwqwqwqw|19841018|159159159|123123aa|jjjjjjjj|hhhhhhhh|pppppppp|q12345678|19841012|456789123|administrator|a0000000|admin123|lovelove|internet|a00000000|19841023|120120120|asd123123|kkkkkkkk|12131415|admin369|84131421|ybnkoia569|testtest|19851120|42011178|1qaz2wsx3edc|12332100|78787878|66778899|19871024|456123789|z12345678|123123456|123456zx|mac123456|88889999|11111111111|147147147|55667788|miaomiao|qwe123123|12332112|1qaz1qaz|cccccccc|qkvpoia569|youaifa569|oooooooo|12312300|1111111a|imissyou|333333333|19841011|zhimakaimen|xingxing|13572468|19841024|19850603|asdasd123|asd12345|qwe12345|qwerty123|5555555555|1223334444|19821010|19871025|3141592654|1029384756|19841001|19861020|369852147|handsome|12300000|12345678Q|16899168|99998888|a1s2d3f4|qqq11111|19851023|19851025|19851212|112112112|songguang|aaa123123|aaaa0000|19871212|zxcv1234|98765432|98989898|789654123|yyyyyyyy|111111qq|96385274|19861012|19861013|gggggggg|6666666666|19851013|19851019|19841026|19841022|19851218|19861122|19841015|windowsxp|QQQQQqqqqq|12345611|123456456|159753123|11221122|hello123|19861111|1q1q1q1q|qazhuang123|abc12345678|woshitiancai|119119119|19871125|19861028|19851125|19851020|19821016|19861016|19861120|19841017|19881010|wangwang|123123qq|19871012|19841027|111222tianya|980099|323232|393041123|tangkai|dedewang|vicekw|qyahzn|634142554|googletester|tianya|*123456|594232|deeven|9233923|780813|811224bai|qqwwee|az123456|3429795|733733|816618|811009|3353212li|q|ggg111|791127|majiajun|z|523|EtnXtxSa65|zxzxzx|223344|741741|010101|259421|storyofall|always|098765|880312|6|650829yjm|1708|774517397|987987|sgdHhfC4x2|780504|wsky0o0o0o|635241|963963|a00000|9YUE27RI|1qa2ws|000999|19960309|d123456|NBvBB32fa9|114114|20062006|kb9zc8uxtx|2199127551|463395727|113113|ApjSqpM844|d|333222|fashion@000|210316|s1t2o3n4|ye123456|legend|00|734992|789987|000|001280|uifKjhF522|lwxlwx|zzzzz|200810|198410|ndaCebx2wx|8496856|821010|JxsGx2Yd87|801122|312312|jianfei000|sxUaIehAtp|huang|999666|667788|858877108aop|2m66xF2AJT|wanshuai198202|789654321|vjfLkiG522|801018|z1122334455|208884|bbbbbb|3456789|001234|benq*edifer|791028|19891229|199771|summer|qfcFgdA3zx|d54q7xjmhx|6Cxd2X986x|PCwAC33gb9|809998|315315|123987|19871015|198412|b33m6yghef|xm55xExBZS|mcaBdaw2vx|151515|d54p7xjkha|CrkUrrP954|668899|3uc9xN53xH|231997|22|4wdaxQ642F|198211|i97wb6sxq7|831220|lssy123|821222|19991226|theIigD4x2|6666666|e10adc3949ba59abbe56e057f20f88|137900|95368452|17746052|24081986|162752|syq20071003|linjiang|fuanyue47|yx12345678|8675309|operation|1.11111E+17|asd45679|xiaofeng|nishiwoer|a123|genius|tianshi|sakura|332335|86944950|woshishen|19880405|huizhang|szc03137|19840504|killer|5518266|woainia|20052324|asddsa|110112|2587758|xiaoxin|xiaoyao|1.23457E+17|woshishei|gundam|316032611|zhanghang|1063524602|151732|woshizhu|wokaonima|WOshiWO|freedom|39398890|34416912|zhanghao|132456|NISHIZHU|jianjian|198319|diablo|112211|showme|81151007|999|kissme|xiaowei|fantasy|7266979|159632|lee01301228|shangxin|woshiniba|522010|110011|1010110|wenwen|1415926|1234321|213213|19871206|fengfeng|dd123456|932313|wangchao|a45389612|331234|jiejie|xiaofei|965523|2007|19861018|19861225|1232123|zzb19860526|831213|nobodywillknowthispwd|love1314a|goyj2010|117289788|1310613106|xaoyin78|zzzxxx|bensile|411511|AAADDD|admin1234|123456hrr|sam123|g13916055158|QAZXCV|da2khdahda|19810625|z333666|qiye123456|ok100404|x50862356|jthrzok|itbbs20101208PC|123412|2w2w2w|aaasss|loveyou1314|@sohu.com|13245612|8844.8844|ex50867212|88448844|seoer2010|liudu88888|www1234|jkhldfkf12dj|556688|lm292979|2345678|123456rt|sxz123|sidake2bn|lb8844|liuping200|kissbaby|eeeeee|78157878|woyaolp512|123456ok|yixin2011|198361|222888|252323|abc123ddd|adf46sdfsf|818078|5201314q|750250|yy55yy88|xkhl656266|runsystem|hjl80033913|bqueensss|85665684|851010|a123456b|86815945|600242|a88778877|jjjjjj|1987721|aa112288|xkl656266|787878kai|tyc99tycaa|yj123456|okmokm|098098|2616445|zhong133|bqueenssss|liuping1920|831101qsl|asdqwe22|789457dwewee|liuli123|200616|poow29q6666|lingnan123|333777|987453|a123b456|nurk202121|88888888zzk|5655487|laozi124|901027|leon123456|123sv67e9|yiersan|1148878306|qw12345|414512@QQ.com|hld_1209|along0321|feadsf3dW|qqqwww|051123|200884|123124|551188|3edc4rfv5|19851030|qqq111|rui100|qq67890|4451551|123456Bc|123678dd|909090|123654yyy|1qazxsw|q111111|kuai+321=Wen_123|5580817aaa|373518|2895192|ab12345|no1444888|tongji5613|aw123123|zxcvbnm111|447100|LGL6641341|rrrrrr|199065|1985111802|dddfff|15894998@qq.com|62379372|123456t|agiene8547|admdfdsfsdd|kingusj|921212|mashuguang|dmba8898|963258|1234567890000|dg123456|123456k|sxm0627|li9900|2290669|hhhhhh|ucdosa|fcqq12346|111aaa|000123a|2w3e4r|yinchuanqi|love8023|hyp815822|jo@qq.cc|chenqing|eohank1980|6184685521|aa998877|123456ac|123qaz|aqaqaq|oooppp|okok588588|nihao789|windson|111333|1997070101|9861250123|7708801314520|12345678900|1234567891|123456789qq|1472583690|1234567891234567|+|qwertyuiop123|aa123456789|7215217758991|9638527410|wo123456|zhang123456|asdfghjkl123|woaini5201314|ABCD123456789|qwertyuio|123456789aa|woaini1314520|asd123456789|woaini123456|1234567899876543|77585211314|13579246810|zxcvbnm|5205201314|123456789z|13800138000|123456789w|123456789+|abcdefg123|a1314520|www123456789|0000000000000000|qwe123456789|123456789asd|12345678912|qqq123456|123456789*|0147258369|5211314521|laopowoaini|yang123456|qq1314520|qaz123456789|ainiyiwannian|a147258369|l123456789|www123|aaa123456789|woainilaopo|abcd12345|520131400|1213141516|7418529630|nuttertools|1314520123|123456789aaa|as123456789|123456789QWE|zxcvbnm123456|123456789..|qwer123456|wo123456789|123456w|123456789abcd|7758521123|1234567890.|y123456|123456789l|ab123456789|1111122222|m123456|chen123456|a987654321|qw123456789|zxc123456789|li123456789|7758258520|77582581314258|iloveyou1314|qazwsxedcrfv|x123456|987654321a|1314woaini|123698741|huang123|h123456|qwertyuiop123456|1314521521|200820082008|q11111|qq1234567|123456l|12345677654321|0.123456789|poiuytrewq|woxiangni|123456789m|7417417474741|5201314789|123456789zxc|123456789qaz|123456789520|ai123456|52013143344|abcde12345|Love5201314|775852100|123456+|yongyuanaini|131452000|123zxc|147258369a|wohenni|woxihuanni|123456tt|134679258|yang123|zxcvbnm123456789|123456520|7758258123|qazwsx123456|abcdefg123456|123abc456|woaini1314.|wang123456789|s123456789|1357913579|abc5201314|zhangjing|asdfghj|123456780|2582587758|1234567890a|13145201314|520131488|a7758521|74108520963.|Y123456789|010203040506|5201314.|c123456|q5201314|789632145|huang123456|LAOpo520|xiao123456|LAOPO521|woaiwolaopo|zxcv123456|wan1314|m123456789|7410852963|yu123456|123456789ab|5201314qq|x123456789|123456788|a1234567890|BEIJING2008|wu123456|123456qqq|110112119|246813579|aidejiushini|w5201314|h123456789|12345a|123456m|qq147258369|yy123456|102030405060|123.123|123012301230|zhangqiang|asdfghjkl;\'|zhao123456|caonimabi|woaini3344|98765432100|123woaini|WOSHINIDIE|qwer123|12345678999|b123456|123456789as|woaini110|123456789p|love520|77582581314|wei123456|womendeai|00123456789|mengmeng|duibuqiwoaini|123...|iloveyou520|zhangyang|520131|131452|@163.com|12312|12|7936369|775852|521131|)|woain|52052|Adgjmptw|521|7.7088E+12|asdf|12332|woaini131|52152|2|1.23321E+12|Adgjm|aaaaa|321|808000|10101|xxm111|@126.com|woaini52|66666|88888|775825|962464|aaa|8888|8888888|13579|456|12365|5.20131E+13|198711|198712|1988|198811|14725836|2008|98765|125521|qwert|7.21522E+12|welcome|198911|1989|hu1990|14725|1478963|1212|520521|zhang|58452|1987|aaaa|888168|5555555|222|1236987|65432|259758|123369|753159|321123|198812|456654|zhangyu|252525|888|7|2009|1986|qq12345|895623|2222222|456258|11011|dandan|852963');
INSERT INTO `system_config` VALUES ('379', 'order_query_tradeno_limit', '60');
INSERT INTO `system_config` VALUES ('380', 'order_query_contact_limit', '300');
INSERT INTO `system_config` VALUES ('381', 'buy_protocol_time', '5');
INSERT INTO `system_config` VALUES ('382', 'shop_voice', '');
INSERT INTO `system_config` VALUES ('383', 'order_query_captcha_type', '0');
INSERT INTO `system_config` VALUES ('384', 'cash_auto_status', '0');
INSERT INTO `system_config` VALUES ('385', 'cash_auto_channel_id', '1');
INSERT INTO `system_config` VALUES ('386', 'cash_auto_user', '');
INSERT INTO `system_config` VALUES ('387', 'order_query_second_limit_orderid', '1');
INSERT INTO `system_config` VALUES ('388', 'safe_tip', '1');

-- ----------------------------
-- Table structure for system_log
-- ----------------------------
DROP TABLE IF EXISTS `system_log`;
CREATE TABLE `system_log` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ip` char(15) NOT NULL DEFAULT '' COMMENT '操作者IP地址',
  `node` char(200) NOT NULL DEFAULT '' COMMENT '当前操作节点',
  `username` varchar(32) NOT NULL DEFAULT '' COMMENT '操作人用户名',
  `action` varchar(200) NOT NULL DEFAULT '' COMMENT '操作行为',
  `content` text NOT NULL COMMENT '操作内容描述',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统操作日志表';

-- ----------------------------
-- Records of system_log
-- ----------------------------

-- ----------------------------
-- Table structure for system_menu
-- ----------------------------
DROP TABLE IF EXISTS `system_menu`;
CREATE TABLE `system_menu` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '父id',
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '名称',
  `node` varchar(200) NOT NULL DEFAULT '' COMMENT '节点代码',
  `icon` varchar(100) NOT NULL DEFAULT '' COMMENT '菜单图标',
  `url` varchar(400) NOT NULL DEFAULT '' COMMENT '链接',
  `params` varchar(500) DEFAULT '' COMMENT '链接参数',
  `target` varchar(20) NOT NULL DEFAULT '_self' COMMENT '链接打开方式',
  `sort` int(11) unsigned DEFAULT '0' COMMENT '菜单排序',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态(0:禁用,1:启用)',
  `create_by` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '创建人',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `index_system_menu_node` (`node`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10023 DEFAULT CHARSET=utf8 COMMENT='系统菜单表';

-- ----------------------------
-- Records of system_menu
-- ----------------------------
INSERT INTO `system_menu` VALUES ('2', '0', '系统管理', '', 'fa fa-gear', '#', '', '_self', '1000', '1', '0', '2015-11-16 19:15:38');
INSERT INTO `system_menu` VALUES ('4', '2', '系统配置', '', '', '#', '', '_self', '100', '1', '0', '2016-03-14 18:12:55');
INSERT INTO `system_menu` VALUES ('5', '4', '网站参数', '', 'fa fa-apple', 'admin/config/index', '', '_self', '20', '1', '0', '2016-05-06 14:36:49');
INSERT INTO `system_menu` VALUES ('6', '4', '文件存储', '', 'fa fa-save', 'admin/config/file', '', '_self', '30', '1', '0', '2016-05-06 14:39:43');
INSERT INTO `system_menu` VALUES ('9', '20', '后台操作日志', '', 'glyphicon glyphicon-console', 'admin/log/index', '', '_self', '50', '1', '0', '2017-03-24 15:49:31');
INSERT INTO `system_menu` VALUES ('19', '20', '权限管理', '', 'fa fa-user-secret', 'admin/auth/index', '', '_self', '10', '1', '0', '2015-11-17 13:18:12');
INSERT INTO `system_menu` VALUES ('20', '2', '系统权限', '', '', '#', '', '_self', '200', '1', '0', '2016-03-14 18:11:41');
INSERT INTO `system_menu` VALUES ('21', '20', '系统菜单', '', 'glyphicon glyphicon-menu-hamburger', 'admin/menu/index', '', '_self', '30', '1', '0', '2015-11-16 19:16:16');
INSERT INTO `system_menu` VALUES ('22', '20', '节点管理', '', 'fa fa-ellipsis-v', 'admin/node/index', '', '_self', '20', '1', '0', '2015-11-16 19:16:16');
INSERT INTO `system_menu` VALUES ('29', '20', '系统用户', '', 'fa fa-users', 'admin/user/index', '', '_self', '40', '1', '0', '2016-10-31 14:31:40');
INSERT INTO `system_menu` VALUES ('61', '0', '微信管理', '', 'fa fa-wechat', '#', '', '_self', '2000', '1', '0', '2017-03-29 11:00:21');
INSERT INTO `system_menu` VALUES ('62', '61', '微信对接配置', '', '', '#', '', '_self', '100', '1', '0', '2017-03-29 11:03:38');
INSERT INTO `system_menu` VALUES ('63', '62', '微信接口配置\r\n', '', 'fa fa-usb', 'wechat/config/index', '', '_self', '10', '1', '0', '2017-03-29 11:04:44');
INSERT INTO `system_menu` VALUES ('65', '61', '微信粉丝管理', '', '', '#', '', '_self', '300', '1', '0', '2017-03-29 11:08:32');
INSERT INTO `system_menu` VALUES ('66', '65', '粉丝标签', '', 'fa fa-tags', 'wechat/tags/index', '', '_self', '10', '1', '0', '2017-03-29 11:09:41');
INSERT INTO `system_menu` VALUES ('67', '65', '已关注粉丝', '', 'fa fa-wechat', 'wechat/fans/index', '', '_self', '20', '1', '0', '2017-03-29 11:10:07');
INSERT INTO `system_menu` VALUES ('68', '61', '微信订制', '', '', '#', '', '_self', '200', '1', '0', '2017-03-29 11:10:39');
INSERT INTO `system_menu` VALUES ('69', '68', '微信菜单定制', '', 'glyphicon glyphicon-phone', 'wechat/menu/index', '', '_self', '40', '1', '0', '2017-03-29 11:11:08');
INSERT INTO `system_menu` VALUES ('70', '68', '关键字管理', '', 'fa fa-paw', 'wechat/keys/index', '', '_self', '10', '1', '0', '2017-03-29 11:11:49');
INSERT INTO `system_menu` VALUES ('71', '68', '关注自动回复', '', 'fa fa-commenting-o', 'wechat/keys/subscribe', '', '_self', '20', '1', '0', '2017-03-29 11:12:32');
INSERT INTO `system_menu` VALUES ('81', '68', '无配置默认回复', '', 'fa fa-commenting-o', 'wechat/keys/defaults', '', '_self', '30', '1', '0', '2017-04-21 14:48:25');
INSERT INTO `system_menu` VALUES ('82', '61', '素材资源管理', '', '', '#', '', '_self', '300', '1', '0', '2017-04-24 11:23:18');
INSERT INTO `system_menu` VALUES ('83', '82', '添加图文', '', 'fa fa-folder-open-o', 'wechat/news/add?id=1', '', '_self', '20', '1', '0', '2017-04-24 11:23:40');
INSERT INTO `system_menu` VALUES ('85', '82', '图文列表', '', 'fa fa-file-pdf-o', 'wechat/news/index', '', '_self', '10', '1', '0', '2017-04-24 11:25:45');
INSERT INTO `system_menu` VALUES ('86', '65', '粉丝黑名单', '', 'fa fa-reddit-alien', 'wechat/fans/back', '', '_self', '30', '1', '0', '2017-05-05 16:17:03');
INSERT INTO `system_menu` VALUES ('87', '0', '插件案例', '', '', '#', '', '_self', '3000', '0', '0', '2017-07-10 15:10:16');
INSERT INTO `system_menu` VALUES ('88', '87', '第三方插件', '', '', '#', '', '_self', '0', '0', '0', '2017-07-10 15:10:37');
INSERT INTO `system_menu` VALUES ('90', '88', 'PCAS 省市区', '', '', 'demo/plugs/region', '', '_self', '0', '0', '0', '2017-07-10 18:45:47');
INSERT INTO `system_menu` VALUES ('91', '87', '内置插件', '', '', '#', '', '_self', '0', '0', '0', '2017-07-10 18:56:59');
INSERT INTO `system_menu` VALUES ('92', '91', '文件上传', '', '', 'demo/plugs/file', '', '_self', '0', '0', '0', '2017-07-10 18:57:22');
INSERT INTO `system_menu` VALUES ('93', '88', '富文本编辑器', '', '', 'demo/plugs/editor', '', '_self', '0', '0', '0', '2017-07-28 15:19:44');
INSERT INTO `system_menu` VALUES ('94', '0', '后台首页', '', '', 'admin/index/main', '', '_self', '0', '0', '0', '2017-08-08 11:28:43');
INSERT INTO `system_menu` VALUES ('95', '0', '网关通道', '', 'fa fa-product-hunt', '#', '', '_self', '4000', '1', '0', '2018-01-18 11:08:57');
INSERT INTO `system_menu` VALUES ('97', '95', '支付接口管理', '', 'fa fa-product-hunt', 'manage/channel/index', '', '_self', '0', '1', '0', '2018-01-18 11:09:53');
INSERT INTO `system_menu` VALUES ('99', '4', '短信配置', '', 'fa fa-envelope-o', 'manage/sms/index', '', '_self', '50', '1', '0', '2018-01-18 11:36:42');
INSERT INTO `system_menu` VALUES ('100', '4', '邮件配置', '', 'fa fa-envelope-o', 'manage/email/index', '', '_self', '60', '1', '0', '2018-01-19 13:45:19');
INSERT INTO `system_menu` VALUES ('101', '0', '用户管理', '', 'fa fa-users', '#', '', '_self', '5000', '1', '0', '2018-01-23 10:46:59');
INSERT INTO `system_menu` VALUES ('102', '101', '商户管理', '', 'fa fa-users', 'manage/user/index', '', '_self', '0', '1', '0', '2018-01-23 10:47:40');
INSERT INTO `system_menu` VALUES ('103', '0', '交易明细', '', 'fa fa-bar-chart', '#', '', '_self', '6000', '1', '0', '2018-01-23 16:47:46');
INSERT INTO `system_menu` VALUES ('104', '103', '订单列表', '', 'fa fa-list-ol', 'manage/order/index', '', '_self', '0', '1', '0', '2018-01-23 16:48:09');
INSERT INTO `system_menu` VALUES ('105', '103', '金额变动记录', '', 'fa fa-exchange', 'manage/log/user_money', '', '_self', '100', '1', '0', '2018-01-24 15:02:50');
INSERT INTO `system_menu` VALUES ('106', '0', '财务管理', '', 'fa fa-google-wallet', '#', '', '_self', '8000', '1', '0', '2018-01-24 15:17:39');
INSERT INTO `system_menu` VALUES ('107', '106', '提现管理', '', 'fa fa-cny', 'manage/cash/index', '', '_self', '0', '1', '0', '2018-01-24 15:18:06');
INSERT INTO `system_menu` VALUES ('108', '4', '后台主页', '', 'fa fa-area-chart', 'manage/index/main', '', '_self', '0', '1', '0', '2018-01-26 14:19:38');
INSERT INTO `system_menu` VALUES ('109', '106', '提现配置', '', 'fa fa-google-wallet', 'manage/cash/config', '', '_self', '70', '1', '0', '2018-01-29 15:29:43');
INSERT INTO `system_menu` VALUES ('110', '4', '站点信息', '', 'glyphicon glyphicon-info-sign', 'manage/site/info', '', '_self', '21', '1', '0', '2018-01-29 16:26:24');
INSERT INTO `system_menu` VALUES ('111', '4', '域名设置', '', 'fa fa-at', 'manage/site/domain', '', '_self', '25', '1', '0', '2018-01-29 16:47:15');
INSERT INTO `system_menu` VALUES ('112', '4', '注册设置', '', 'fa fa-cog', 'manage/site/register', '', '_self', '27', '1', '0', '2018-01-29 18:45:43');
INSERT INTO `system_menu` VALUES ('113', '4', '字词过滤', '', 'fa fa-filter', 'manage/site/wordfilter', '', '_self', '90', '1', '0', '2018-01-30 14:50:48');
INSERT INTO `system_menu` VALUES ('114', '103', '商户分析', '', 'fa fa-area-chart', 'manage/order/merchant', '', '_self', '40', '1', '0', '2018-01-31 11:32:00');
INSERT INTO `system_menu` VALUES ('115', '103', '渠道分析', '', 'fa fa-area-chart', 'manage/order/channel', '', '_self', '50', '1', '0', '2018-01-31 11:32:29');
INSERT INTO `system_menu` VALUES ('116', '103', '实时数据', '', 'fa fa-area-chart', 'manage/order/hour', '', '_self', '60', '1', '0', '2018-01-31 11:32:57');
INSERT INTO `system_menu` VALUES ('117', '0', '商品管理', '', 'fa fa-shopping-bag', '#', '', '_self', '5500', '1', '0', '2018-02-01 18:43:51');
INSERT INTO `system_menu` VALUES ('118', '117', '商品管理', '', 'fa fa-shopping-bag', 'manage/goods/index', '', '_self', '0', '1', '0', '2018-02-01 18:44:10');
INSERT INTO `system_menu` VALUES ('119', '103', '投诉管理', '', 'fa fa-bullhorn', 'manage/complaint/index', '', '_self', '20', '1', '0', '2018-02-02 15:34:06');
INSERT INTO `system_menu` VALUES ('120', '101', '登录日志', '', 'fa fa-paw', 'manage/user/loginlog', '', '_self', '0', '1', '0', '2018-02-05 10:29:10');
INSERT INTO `system_menu` VALUES ('121', '0', '内容管理', '', 'fa fa-file-text', '#', '', '_self', '4500', '1', '0', '2018-02-09 10:38:43');
INSERT INTO `system_menu` VALUES ('122', '121', '内容管理', '', 'fa fa-file-text', 'manage/article/index', '', '_self', '0', '1', '0', '2018-02-09 10:44:51');
INSERT INTO `system_menu` VALUES ('123', '121', '分类管理', '', 'fa fa-bars', 'manage/article_category/index', '', '_self', '0', '1', '0', '2018-03-06 00:13:26');
INSERT INTO `system_menu` VALUES ('124', '4', '备份管理', '', 'fa fa-database', 'manage/backup/index', '', '_self', '100', '0', '0', '2018-03-12 19:31:11');
INSERT INTO `system_menu` VALUES ('125', '4', '前台导航', '', 'fa fa-navicon', 'admin/nav/index', '', '_self', '110', '1', '0', '2018-03-23 17:08:38');
INSERT INTO `system_menu` VALUES ('126', '101', '登录解锁', '', 'fa fa-unlock', '/manage/user/unlock', '', '_self', '0', '1', '0', '2018-03-27 11:15:00');
INSERT INTO `system_menu` VALUES ('127', '20', '商户操作日志', '', 'fa fa-thumb-tack', '/admin/mlog/index', '', '_self', '60', '1', '0', '2018-03-27 16:19:10');
INSERT INTO `system_menu` VALUES ('128', '4', '推广设置', '', 'fa fa-bullhorn', '/manage/site/spread', '', '_self', '120', '1', '0', '2018-03-27 19:19:29');
INSERT INTO `system_menu` VALUES ('129', '101', '邀请码管理', '', 'fa fa-user-plus', '/manage/invite_code/index', '', '_self', '0', '1', '0', '2018-03-27 19:54:29');
INSERT INTO `system_menu` VALUES ('130', '117', '订单自定义', '', 'fa fa-credit-card-alt', 'manage/goods/change_trade_no_status', '', '_self', '0', '1', '0', '2018-04-20 09:03:50');
INSERT INTO `system_menu` VALUES ('131', '95', '费率分组管理', '', '', 'manage/rate/index', '', '_self', '50', '1', '0', '2018-07-05 18:26:39');
INSERT INTO `system_menu` VALUES ('133', '95', '安装支付接口', '', 'fa fa-futbol-o', 'manage/channel/index?is_install=0', '', '_self', '0', '1', '0', '2018-01-18 03:09:53');
INSERT INTO `system_menu` VALUES ('135', '106', '代付渠道管理', '', 'fa fa-futbol-o', 'manage/cashChannel/index', '', '_self', '1000', '1', '0', '2018-08-07 15:50:38');
INSERT INTO `system_menu` VALUES ('138', '117', '商品池管理', '', 'fa fa-shopping-bag', '/manage/goods/pool_list', '', '_self', '0', '1', '0', '2020-05-01 22:51:40');
INSERT INTO `system_menu` VALUES ('139', '0', '应用中心', '', 'fa fa-cloud', '#', '', '_self', '9000', '1', '0', '2020-12-17 23:28:08');
INSERT INTO `system_menu` VALUES ('140', '139', '应用中心', '', '', '#', '', '_self', '30', '1', '0', '2020-12-17 23:31:58');
INSERT INTO `system_menu` VALUES ('141', '140', '模板主题', '', 'fa fa-tv', 'admin/cloud/theme', '', '_self', '10', '1', '0', '2020-12-17 23:35:26');
INSERT INTO `system_menu` VALUES ('144', '139', '站长推荐', '', '', '#', '', '_self', '30', '1', '0', '2020-12-17 23:41:21');
INSERT INTO `system_menu` VALUES ('145', '144', '云服务器', '', 'fa fa-server', 'admin/cloud/server', '', '_self', '10', '1', '0', '2020-12-17 23:42:15');
INSERT INTO `system_menu` VALUES ('146', '140', '支付接口', '', 'fa fa-paypal', 'admin/cloud/payment', '', '_self', '20', '1', '0', '2020-12-17 23:43:23');
INSERT INTO `system_menu` VALUES ('147', '139', '个人中心', '', 'glyphicon glyphicon-user', 'admin/cloud/user', '', '_self', '0', '1', '0', '2020-12-17 23:48:20');
INSERT INTO `system_menu` VALUES ('148', '139', '系统升级', '', 'glyphicon glyphicon-cloud', 'admin/Cloud/upgrade', '', '_self', '10', '1', '0', '2021-01-20 16:54:14');
INSERT INTO `system_menu` VALUES ('149', '117', '商品池标签', '', 'fa fa-cubes', 'manage/goods/pool_span', '', '_self', '0', '1', '0', '2021-02-06 23:31:00');
INSERT INTO `system_menu` VALUES ('150', '9999', '实时数据可视化', '', 'fa fa-desktop', 'manage/plugin/bgdata', '', '_self', '0', '1', '0', '2021-02-10 15:46:38');
INSERT INTO `system_menu` VALUES ('151', '9999', '流水挑战', '', 'glyphicon glyphicon-equalizer', 'manage/plugin/tradetask', '', '_self', '0', '1', '0', '2021-02-15 10:22:54');
INSERT INTO `system_menu` VALUES ('152', '9999', '风控展示', '', 'fa fa-shield', 'manage/plugin/risk', '', '_self', '0', '1', '0', '2021-02-17 15:14:47');
INSERT INTO `system_menu` VALUES ('153', '9999', '店铺引导页', '', 'fa fa-modx', 'manage/plugin/guide', '', '_self', '0', '1', '0', '2021-02-23 16:07:50');
INSERT INTO `system_menu` VALUES ('154', '9999', '数据库迁移', '', 'fa fa-random', 'manage/plugin/migrate', '', '_self', '0', '1', '0', '2021-02-26 23:48:40');
INSERT INTO `system_menu` VALUES ('155', '9999', '商户子域名', '', 'fa fa-link', 'manage/plugin/subdomain', '', '_self', '0', '1', '0', '2021-02-28 11:31:20');
INSERT INTO `system_menu` VALUES ('9999', '139', '扩展功能', '', '', '#', '', '_self', '20', '1', '0', '2020-12-17 23:37:09');
INSERT INTO `system_menu` VALUES ('10000', '9999', '第三方登录', '', 'fa fa-sign-in', 'manage/plugin/oauth2', '', '_self', '0', '1', '0', '2021-03-05 12:10:13');
INSERT INTO `system_menu` VALUES ('10001', '9999', '实名认证', '', 'fa fa-shield', 'manage/plugin/merchantauth', '', '_self', '0', '1', '0', '2021-03-10 16:59:19');
INSERT INTO `system_menu` VALUES ('10002', '9999', 'APP打包', '', 'glyphicon glyphicon-phone', 'manage/plugin/app', '', '_self', '0', '1', '0', '2021-03-30 15:38:51');
INSERT INTO `system_menu` VALUES ('10003', '9999', '流水排行榜', '', 'fa fa-sort-amount-desc', 'manage/plugin/traderank', '', '_self', '0', '1', '0', '2021-04-02 21:43:28');
INSERT INTO `system_menu` VALUES ('10004', '9999', '购卡页DIY', '', 'fa fa-lemon-o', 'manage/plugin/shopdiy', '', '_self', '0', '1', '0', '2021-04-13 13:05:15');
INSERT INTO `system_menu` VALUES ('10005', '9999', '代理及全网通', '', 'fa fa-clone', 'manage/plugin/agentsetting', '', '_self', '0', '1', '0', '2021-04-21 22:53:18');
INSERT INTO `system_menu` VALUES ('10006', '9999', '支付风控策略', '', 'fa fa-product-hunt', 'manage/plugin/paysafe', '', '_self', '0', '1', '0', '2021-05-02 20:21:52');
INSERT INTO `system_menu` VALUES ('10007', '9999', '系统安全增强', '', 'fa fa-lock', 'manage/plugin/systemsafe', '', '_self', '0', '1', '0', '2021-05-04 15:35:06');
INSERT INTO `system_menu` VALUES ('10008', '9999', '网关锁', '', 'fa fa-lock', 'manage/plugin/glock', '', '_self', '0', '1', '0', '2021-05-16 15:41:14');
INSERT INTO `system_menu` VALUES ('10009', '9999', '跨平台对接', '', 'fa fa-connectdevelop', 'manage/plugin/cross', '', '_self', '0', '1', '0', '2021-05-27 00:29:28');
INSERT INTO `system_menu` VALUES ('10010', '9999', '惩罚机制', '', 'fa fa-frown-o', 'manage/plugin/punish', '', '_self', '0', '1', '0', '2021-06-23 10:35:32');
INSERT INTO `system_menu` VALUES ('10011', '9999', '锁卡机制', '', 'fa fa-unlock-alt', '/manage/plugin/lockcard', '', '_self', '0', '1', '0', '2021-06-29 19:04:19');
INSERT INTO `system_menu` VALUES ('10012', '9999', '站长工具', '', 'fa fa-th', '/manage/plugin/tools', '', '_self', '0', '1', '0', '2021-06-30 11:58:22');
INSERT INTO `system_menu` VALUES ('10013', '9999', '支付API', '', 'fa fa-paypal', 'manage/plugin/payapi', '', '_self', '0', '1', '0', '2021-06-30 20:26:15');
INSERT INTO `system_menu` VALUES ('10014', '9999', '自助选号', '', 'fa fa-gittip', 'manage/plugin/selectcard', '', '_self', '0', '1', '0', '2021-07-07 22:23:06');
INSERT INTO `system_menu` VALUES ('10015', '9999', '商户自定义支付', '', 'fa fa-puzzle-piece', 'manage/plugin/custompay', '', '_self', '0', '1', '0', '2021-07-16 19:00:47');
INSERT INTO `system_menu` VALUES ('10016', '9999', '免签码支付', '', 'fa fa-qrcode', 'manage/plugin/codepay', '', '_self', '0', '1', '0', '2021-07-25 21:08:58');
INSERT INTO `system_menu` VALUES ('10017', '9999', '客服系统', '', 'fa fa-send-o', 'manage/plugin/chat', '', '_self', '0', '1', '0', '2021-08-06 17:00:33');
INSERT INTO `system_menu` VALUES ('10018', '103', 'API订单', '', 'fa fa-paypal', 'manage/plugin/payapiorder', '', '_self', '0', '1', '0', '2021-10-19 20:27:57');
INSERT INTO `system_menu` VALUES ('10019', '103', '商户API统计', '', 'fa fa-area-chart', 'manage/order/apimerchant', '', '_self', '45', '1', '0', '2021-10-22 21:33:31');
INSERT INTO `system_menu` VALUES ('10020', '9999', '推广大使', '', 'fa fa-users', 'manage/plugin/ambassador', '', '_self', '0', '1', '0', '2021-11-15 22:31:12');
INSERT INTO `system_menu` VALUES ('10021', '106', '支付宝全自动打款', '', 'fa fa-credit-card', 'manage/cash/autoconfig', '', '_self', '1001', '1', '0', '2022-02-22 21:45:15');
INSERT INTO `system_menu` VALUES ('10022', '95', '电商合规支付', '', 'fa fa-leaf', 'manage/plugin/airpayx', '', '_self', '60', '1', '0', '2022-02-23 00:03:08');

-- ----------------------------
-- Table structure for system_node
-- ----------------------------
DROP TABLE IF EXISTS `system_node`;
CREATE TABLE `system_node` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `node` varchar(100) DEFAULT NULL COMMENT '节点代码',
  `title` varchar(500) DEFAULT NULL COMMENT '节点标题',
  `is_menu` tinyint(1) unsigned DEFAULT '0' COMMENT '是否可设置为菜单',
  `is_auth` tinyint(1) unsigned DEFAULT '1' COMMENT '是否启动RBAC权限控制',
  `is_login` tinyint(1) unsigned DEFAULT '1' COMMENT '是否启动登录控制',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `index_system_node_node` (`node`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=390 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='系统节点表';

-- ----------------------------
-- Records of system_node
-- ----------------------------
INSERT INTO `system_node` VALUES ('131', 'admin/auth/index', '权限列表', '1', '1', '1', '2017-08-23 07:45:42');
INSERT INTO `system_node` VALUES ('132', 'admin', '后台管理', '0', '1', '1', '2017-08-23 07:45:44');
INSERT INTO `system_node` VALUES ('133', 'admin/auth/apply', '节点授权', '0', '1', '1', '2017-08-23 08:05:18');
INSERT INTO `system_node` VALUES ('134', 'admin/auth/add', '添加授权', '0', '1', '1', '2017-08-23 08:05:19');
INSERT INTO `system_node` VALUES ('135', 'admin/auth/edit', '编辑权限', '0', '1', '1', '2017-08-23 08:05:19');
INSERT INTO `system_node` VALUES ('136', 'admin/auth/forbid', '禁用权限', '0', '1', '1', '2017-08-23 08:05:20');
INSERT INTO `system_node` VALUES ('137', 'admin/auth/resume', '启用权限', '0', '1', '1', '2017-08-23 08:05:20');
INSERT INTO `system_node` VALUES ('138', 'admin/auth/del', '删除权限', '0', '1', '1', '2017-08-23 08:05:21');
INSERT INTO `system_node` VALUES ('139', 'admin/config/index', '参数配置', '1', '1', '1', '2017-08-23 08:05:22');
INSERT INTO `system_node` VALUES ('140', 'admin/config/file', '文件配置', '1', '1', '1', '2017-08-23 08:05:22');
INSERT INTO `system_node` VALUES ('141', 'admin/log/index', '日志列表', '1', '1', '1', '2017-08-23 08:05:23');
INSERT INTO `system_node` VALUES ('142', 'admin/log/del', '删除日志', '0', '1', '1', '2017-08-23 08:05:24');
INSERT INTO `system_node` VALUES ('143', 'admin/menu/index', '菜单列表', '1', '1', '1', '2017-08-23 08:05:25');
INSERT INTO `system_node` VALUES ('144', 'admin/menu/add', '添加菜单', '0', '1', '1', '2017-08-23 08:05:25');
INSERT INTO `system_node` VALUES ('145', 'admin/menu/edit', '编辑菜单', '0', '1', '1', '2017-08-23 08:05:26');
INSERT INTO `system_node` VALUES ('146', 'admin/menu/del', '删除菜单', '0', '1', '1', '2017-08-23 08:05:26');
INSERT INTO `system_node` VALUES ('147', 'admin/menu/forbid', '禁用菜单', '0', '1', '1', '2017-08-23 08:05:27');
INSERT INTO `system_node` VALUES ('148', 'admin/menu/resume', '启用菜单', '0', '1', '1', '2017-08-23 08:05:28');
INSERT INTO `system_node` VALUES ('149', 'admin/node/index', '节点列表', '1', '1', '1', '2017-08-23 08:05:29');
INSERT INTO `system_node` VALUES ('150', 'admin/node/save', '节点更新', '0', '1', '1', '2017-08-23 08:05:30');
INSERT INTO `system_node` VALUES ('151', 'admin/user/index', '用户管理', '1', '1', '1', '2017-08-23 08:05:31');
INSERT INTO `system_node` VALUES ('152', 'admin/user/auth', '用户授权', '0', '1', '1', '2017-08-23 08:05:32');
INSERT INTO `system_node` VALUES ('153', 'admin/user/add', '添加用户', '0', '1', '1', '2017-08-23 08:05:33');
INSERT INTO `system_node` VALUES ('154', 'admin/user/edit', '编辑用户', '0', '1', '1', '2017-08-23 08:05:33');
INSERT INTO `system_node` VALUES ('155', 'admin/user/pass', '用户密码', '0', '1', '1', '2017-08-23 08:05:34');
INSERT INTO `system_node` VALUES ('156', 'admin/user/del', '删除用户', '0', '1', '1', '2017-08-23 08:05:34');
INSERT INTO `system_node` VALUES ('157', 'admin/user/forbid', '禁用用户', '0', '1', '1', '2017-08-23 08:05:34');
INSERT INTO `system_node` VALUES ('158', 'admin/user/resume', '启用用户', '0', '1', '1', '2017-08-23 08:05:35');
INSERT INTO `system_node` VALUES ('159', 'demo/plugs/file', '文件上传', '1', '1', '1', '2017-08-23 08:05:36');
INSERT INTO `system_node` VALUES ('160', 'demo/plugs/region', '区域选择', '1', '1', '1', '2017-08-23 08:05:36');
INSERT INTO `system_node` VALUES ('161', 'demo/plugs/editor', '富文本器', '1', '1', '1', '2017-08-23 08:05:37');
INSERT INTO `system_node` VALUES ('162', 'wechat/config/index', '微信参数', '1', '1', '1', '2017-08-23 08:05:37');
INSERT INTO `system_node` VALUES ('163', 'wechat/config/pay', '微信支付', '0', '1', '1', '2017-08-23 08:05:38');
INSERT INTO `system_node` VALUES ('164', 'wechat/fans/index', '粉丝列表', '1', '1', '1', '2017-08-23 08:05:39');
INSERT INTO `system_node` VALUES ('165', 'wechat/fans/back', '粉丝黑名单', '1', '1', '1', '2017-08-23 08:05:39');
INSERT INTO `system_node` VALUES ('166', 'wechat/fans/backadd', '移入黑名单', '0', '1', '1', '2017-08-23 08:05:40');
INSERT INTO `system_node` VALUES ('167', 'wechat/fans/tagset', '设置标签', '0', '1', '1', '2017-08-23 08:05:41');
INSERT INTO `system_node` VALUES ('168', 'wechat/fans/backdel', '移出黑名单', '0', '1', '1', '2017-08-23 08:05:41');
INSERT INTO `system_node` VALUES ('169', 'wechat/fans/tagadd', '添加标签', '0', '1', '1', '2017-08-23 08:05:41');
INSERT INTO `system_node` VALUES ('170', 'wechat/fans/tagdel', '删除标签', '0', '1', '1', '2017-08-23 08:05:42');
INSERT INTO `system_node` VALUES ('171', 'wechat/fans/sync', '同步粉丝', '0', '1', '1', '2017-08-23 08:05:43');
INSERT INTO `system_node` VALUES ('172', 'wechat/keys/index', '关键字列表', '1', '1', '1', '2017-08-23 08:05:44');
INSERT INTO `system_node` VALUES ('173', 'wechat/keys/add', '添加关键字', '0', '1', '1', '2017-08-23 08:05:44');
INSERT INTO `system_node` VALUES ('174', 'wechat/keys/edit', '编辑关键字', '0', '1', '1', '2017-08-23 08:05:45');
INSERT INTO `system_node` VALUES ('175', 'wechat/keys/del', '删除关键字', '0', '1', '1', '2017-08-23 08:05:45');
INSERT INTO `system_node` VALUES ('176', 'wechat/keys/forbid', '禁用关键字', '0', '1', '1', '2017-08-23 08:05:46');
INSERT INTO `system_node` VALUES ('177', 'wechat/keys/resume', '启用关键字', '0', '1', '1', '2017-08-23 08:05:46');
INSERT INTO `system_node` VALUES ('178', 'wechat/keys/subscribe', '关注默认回复', '0', '1', '1', '2017-08-23 08:05:48');
INSERT INTO `system_node` VALUES ('179', 'wechat/keys/defaults', '默认响应回复', '0', '1', '1', '2017-08-23 08:05:49');
INSERT INTO `system_node` VALUES ('180', 'wechat/menu/index', '微信菜单', '1', '1', '1', '2017-08-23 08:05:51');
INSERT INTO `system_node` VALUES ('181', 'wechat/menu/edit', '发布微信菜单', '0', '1', '1', '2017-08-23 08:05:51');
INSERT INTO `system_node` VALUES ('182', 'wechat/menu/cancel', '取消微信菜单', '0', '1', '1', '2017-08-23 08:05:52');
INSERT INTO `system_node` VALUES ('183', 'wechat/news/index', '微信图文列表', '1', '1', '1', '2017-08-23 08:05:52');
INSERT INTO `system_node` VALUES ('184', 'wechat/news/select', '微信图文选择', '0', '1', '1', '2017-08-23 08:05:53');
INSERT INTO `system_node` VALUES ('185', 'wechat/news/image', '微信图片选择', '0', '1', '1', '2017-08-23 08:05:53');
INSERT INTO `system_node` VALUES ('186', 'wechat/news/add', '添加图文', '0', '1', '1', '2017-08-23 08:05:54');
INSERT INTO `system_node` VALUES ('187', 'wechat/news/edit', '编辑图文', '0', '1', '1', '2017-08-23 08:05:56');
INSERT INTO `system_node` VALUES ('188', 'wechat/news/del', '删除图文', '0', '1', '1', '2017-08-23 08:05:56');
INSERT INTO `system_node` VALUES ('189', 'wechat/news/push', '推送图文', '0', '1', '1', '2017-08-23 08:05:56');
INSERT INTO `system_node` VALUES ('190', 'wechat/tags/index', '微信标签列表', '1', '1', '1', '2017-08-23 08:05:58');
INSERT INTO `system_node` VALUES ('191', 'wechat/tags/add', '添加微信标签', '0', '1', '1', '2017-08-23 08:05:58');
INSERT INTO `system_node` VALUES ('192', 'wechat/tags/edit', '编辑微信标签', '0', '1', '1', '2017-08-23 08:05:58');
INSERT INTO `system_node` VALUES ('193', 'wechat/tags/sync', '同步微信标签', '0', '1', '1', '2017-08-23 08:05:59');
INSERT INTO `system_node` VALUES ('194', 'admin/auth', '权限管理', '0', '1', '1', '2017-08-23 08:06:58');
INSERT INTO `system_node` VALUES ('195', 'admin/config', '系统配置', '0', '1', '1', '2017-08-23 08:07:34');
INSERT INTO `system_node` VALUES ('196', 'admin/log', '系统日志', '0', '1', '1', '2017-08-23 08:07:46');
INSERT INTO `system_node` VALUES ('197', 'admin/menu', '系统菜单', '0', '1', '1', '2017-08-23 08:08:02');
INSERT INTO `system_node` VALUES ('198', 'admin/node', '系统节点', '0', '1', '1', '2017-08-23 08:08:44');
INSERT INTO `system_node` VALUES ('199', 'admin/user', '系统用户', '0', '1', '1', '2017-08-23 08:09:43');
INSERT INTO `system_node` VALUES ('200', 'demo', '插件案例', '0', '1', '1', '2017-08-23 08:10:43');
INSERT INTO `system_node` VALUES ('201', 'demo/plugs', '插件案例', '0', '1', '1', '2017-08-23 08:10:51');
INSERT INTO `system_node` VALUES ('202', 'wechat', '微信管理', '0', '1', '1', '2017-08-23 08:11:13');
INSERT INTO `system_node` VALUES ('203', 'wechat/config', '微信配置', '0', '1', '1', '2017-08-23 08:11:19');
INSERT INTO `system_node` VALUES ('204', 'wechat/fans', '粉丝管理', '0', '1', '1', '2017-08-23 08:11:36');
INSERT INTO `system_node` VALUES ('205', 'wechat/keys', '关键字管理', '0', '1', '1', '2017-08-23 08:13:00');
INSERT INTO `system_node` VALUES ('206', 'wechat/menu', '微信菜单管理', '0', '1', '1', '2017-08-23 08:14:11');
INSERT INTO `system_node` VALUES ('207', 'wechat/news', '微信图文管理', '0', '1', '1', '2017-08-23 08:14:40');
INSERT INTO `system_node` VALUES ('208', 'wechat/tags', '微信标签管理', '0', '1', '1', '2017-08-23 08:15:25');
INSERT INTO `system_node` VALUES ('209', 'manage/channel/index', '供应商管理', '0', '1', '1', '2018-01-19 05:53:53');
INSERT INTO `system_node` VALUES ('210', 'manage/channel/add', '添加供应商', '0', '1', '1', '2018-01-19 05:53:54');
INSERT INTO `system_node` VALUES ('211', 'manage/channel/edit', '修改供应商', '0', '1', '1', '2018-01-19 05:53:54');
INSERT INTO `system_node` VALUES ('212', 'manage/channel/del', '删除供应商', '0', '1', '1', '2018-01-19 05:53:54');
INSERT INTO `system_node` VALUES ('213', 'manage/channel/change_status', '修改供应商状态', '0', '1', '1', '2018-01-19 05:53:55');
INSERT INTO `system_node` VALUES ('214', 'manage/channel/getlistbypaytype', '根据支付类型获取支付供应商列表', '0', '1', '1', '2018-01-19 05:53:55');
INSERT INTO `system_node` VALUES ('215', 'manage/channelaccount/add', '添加供应商账号', '0', '1', '1', '2018-01-19 05:54:03');
INSERT INTO `system_node` VALUES ('216', 'manage/channelaccount/index', '供应商账号管理', '0', '1', '1', '2018-01-19 05:54:04');
INSERT INTO `system_node` VALUES ('217', 'manage/channelaccount/edit', '修改供应商账号', '0', '1', '1', '2018-01-19 05:54:05');
INSERT INTO `system_node` VALUES ('218', 'manage/channelaccount/del', '删除供应商账号', '0', '1', '1', '2018-01-19 05:54:06');
INSERT INTO `system_node` VALUES ('219', 'manage/channelaccount/clear', '清除供应商账号额度', '0', '1', '1', '2018-01-19 05:54:07');
INSERT INTO `system_node` VALUES ('220', 'manage/channelaccount/change_status', '修改供应商账号状态', '0', '1', '1', '2018-01-19 05:54:07');
INSERT INTO `system_node` VALUES ('221', 'manage/channelaccount/getfields', '获取渠道账户字段', '0', '1', '1', '2018-01-19 05:54:08');
INSERT INTO `system_node` VALUES ('222', 'manage/email/index', '邮件配置', '0', '1', '1', '2018-01-19 05:54:10');
INSERT INTO `system_node` VALUES ('223', 'manage/email/test', '发信测试', '0', '1', '1', '2018-01-19 05:54:10');
INSERT INTO `system_node` VALUES ('224', 'manage/product/index', '支付产品管理', '0', '1', '1', '2018-01-19 05:54:11');
INSERT INTO `system_node` VALUES ('225', 'manage/product/add', '添加支付产品', '0', '1', '1', '2018-01-19 05:54:12');
INSERT INTO `system_node` VALUES ('226', 'manage/product/edit', '编辑支付产品', '0', '1', '1', '2018-01-19 05:54:12');
INSERT INTO `system_node` VALUES ('227', 'manage/product/del', '删除支付产品', '0', '1', '1', '2018-01-19 05:54:14');
INSERT INTO `system_node` VALUES ('228', 'manage/product/change_status', '修改支付产品状态', '0', '1', '1', '2018-01-19 05:54:14');
INSERT INTO `system_node` VALUES ('229', 'manage/sms/index', '短信配置', '0', '1', '1', '2018-01-19 05:54:15');
INSERT INTO `system_node` VALUES ('230', 'manage/cash/index', '提现列表', '0', '1', '1', '2018-01-25 08:47:20');
INSERT INTO `system_node` VALUES ('231', 'manage/cash/detail', '提现申请详情', '0', '1', '1', '2018-01-25 08:47:20');
INSERT INTO `system_node` VALUES ('232', 'manage/cash/payqrcode', '', '0', '1', '1', '2018-01-25 08:47:21');
INSERT INTO `system_node` VALUES ('233', 'manage/log/user_money', '金额变动记录', '0', '1', '1', '2018-01-25 08:47:24');
INSERT INTO `system_node` VALUES ('234', 'manage/order/index', '订单列表', '0', '1', '1', '2018-01-25 08:47:25');
INSERT INTO `system_node` VALUES ('235', 'manage/order/detail', '订单详情', '0', '1', '1', '2018-01-25 08:47:26');
INSERT INTO `system_node` VALUES ('236', 'manage/user/index', '商户管理', '0', '1', '1', '2018-01-25 08:47:29');
INSERT INTO `system_node` VALUES ('237', 'manage/user/change_status', '修改商户审核状态', '0', '1', '1', '2018-01-25 08:47:30');
INSERT INTO `system_node` VALUES ('238', 'manage/user/detail', '查看商户详情', '0', '1', '1', '2018-01-25 08:47:30');
INSERT INTO `system_node` VALUES ('239', 'manage/user/add', '添加商户', '0', '1', '1', '2018-01-25 08:47:31');
INSERT INTO `system_node` VALUES ('240', 'manage/user/edit', '编辑商户', '0', '1', '1', '2018-01-25 08:47:31');
INSERT INTO `system_node` VALUES ('241', 'manage/user/del', '删除商户', '0', '1', '1', '2018-01-25 08:47:32');
INSERT INTO `system_node` VALUES ('242', 'manage/user/manage_money', '商户资金管理', '0', '1', '1', '2018-01-25 08:47:32');
INSERT INTO `system_node` VALUES ('243', 'manage/user/rate', '设置商户费率', '0', '1', '1', '2018-01-25 08:47:33');
INSERT INTO `system_node` VALUES ('244', 'manage/cash/config', '提现配置', '0', '1', '1', '2018-02-01 09:00:28');
INSERT INTO `system_node` VALUES ('245', 'manage/index/main', '主页', '0', '1', '1', '2018-02-01 09:00:33');
INSERT INTO `system_node` VALUES ('246', 'manage/order/merchant', '商户分析', '0', '1', '1', '2018-02-01 09:00:35');
INSERT INTO `system_node` VALUES ('247', 'manage/order/channel', '渠道分析', '0', '1', '1', '2018-02-01 09:00:36');
INSERT INTO `system_node` VALUES ('248', 'manage/order/hour', '实时数据', '0', '1', '1', '2018-02-01 09:00:36');
INSERT INTO `system_node` VALUES ('249', 'manage/site/info', '站点信息配置', '0', '1', '1', '2018-02-01 09:00:40');
INSERT INTO `system_node` VALUES ('250', 'manage/site/domain', '域名设置', '0', '1', '1', '2018-02-01 09:00:40');
INSERT INTO `system_node` VALUES ('251', 'manage/site/register', '注册设置', '0', '1', '1', '2018-02-01 09:00:41');
INSERT INTO `system_node` VALUES ('252', 'manage/site/wordfilter', '字词过滤', '0', '1', '1', '2018-02-01 09:00:41');
INSERT INTO `system_node` VALUES ('253', 'manage/user/change_freeze_status', '修改商户冻结状态', '0', '1', '1', '2018-02-01 09:00:43');
INSERT INTO `system_node` VALUES ('254', 'manage/user/login', '商户登录', '0', '1', '1', '2018-02-01 09:00:45');
INSERT INTO `system_node` VALUES ('255', 'manage/user/message', '商户站内信', '0', '1', '1', '2018-02-01 09:00:45');
INSERT INTO `system_node` VALUES ('256', 'merchant/cash/index', '', '0', '0', '0', '2018-02-01 09:00:48');
INSERT INTO `system_node` VALUES ('257', 'manage/goods/index', '商品管理', '0', '1', '1', '2018-02-01 11:33:28');
INSERT INTO `system_node` VALUES ('258', 'manage/goods/change_status', '修改商品上架状态', '0', '1', '1', '2018-02-01 11:33:29');
INSERT INTO `system_node` VALUES ('259', 'manage/complaint/index', '投诉管理', '0', '1', '1', '2018-02-02 11:46:10');
INSERT INTO `system_node` VALUES ('260', 'manage/complaint/change_status', '修改投诉处理状态', '0', '1', '1', '2018-02-02 11:46:11');
INSERT INTO `system_node` VALUES ('261', 'manage/complaint/change_admin_read', '修改投诉读取状态', '0', '1', '1', '2018-02-02 11:46:11');
INSERT INTO `system_node` VALUES ('262', 'manage/complaint/del', '删除投诉', '0', '1', '1', '2018-02-02 11:46:12');
INSERT INTO `system_node` VALUES ('263', 'manage/order/change_freeze_status', '修改订单冻结状态', '0', '1', '1', '2018-02-05 10:24:23');
INSERT INTO `system_node` VALUES ('264', 'manage/user/loginlog', '商户登录日志', '0', '1', '1', '2018-02-05 10:24:31');
INSERT INTO `system_node` VALUES ('265', 'merchant/user/closelink', '', '0', '0', '0', '2018-03-20 06:22:03');
INSERT INTO `system_node` VALUES ('266', 'merchant/goodscategory', '', '0', '0', '0', '2018-03-20 06:22:32');
INSERT INTO `system_node` VALUES ('267', 'merchant/cash/apply', '', '0', '0', '0', '2018-03-20 06:22:35');
INSERT INTO `system_node` VALUES ('268', 'merchant/cash', '', '0', '0', '0', '2018-03-20 06:22:38');
INSERT INTO `system_node` VALUES ('269', 'merchant', '', '0', '0', '0', '2018-03-20 06:23:00');
INSERT INTO `system_node` VALUES ('270', 'manage/article/add', '添加文章', '0', '1', '1', '2018-03-20 06:23:38');
INSERT INTO `system_node` VALUES ('271', 'manage/article/edit', '编辑文章', '0', '1', '1', '2018-03-20 06:23:39');
INSERT INTO `system_node` VALUES ('272', 'manage/article/index', '内容管理', '0', '1', '1', '2018-03-20 06:23:39');
INSERT INTO `system_node` VALUES ('273', 'manage/article/change_status', '修改文章状态', '0', '1', '1', '2018-03-20 06:23:40');
INSERT INTO `system_node` VALUES ('274', 'manage/article/del', '删除文章', '0', '1', '1', '2018-03-20 06:23:41');
INSERT INTO `system_node` VALUES ('275', 'manage/articlecategory/index', '文章分类管理', '0', '1', '1', '2018-03-20 06:23:53');
INSERT INTO `system_node` VALUES ('276', 'manage/articlecategory/add', '添加文章分类', '0', '1', '1', '2018-03-20 06:23:53');
INSERT INTO `system_node` VALUES ('277', 'manage/articlecategory/edit', '编辑文章分类', '0', '1', '1', '2018-03-20 06:23:54');
INSERT INTO `system_node` VALUES ('278', 'manage/articlecategory/change_status', '修改文章分类状态', '0', '1', '1', '2018-03-20 06:23:54');
INSERT INTO `system_node` VALUES ('279', 'manage/articlecategory/del', '删除文章分类', '0', '1', '1', '2018-03-20 06:23:55');
INSERT INTO `system_node` VALUES ('280', 'manage/backup/index', '备份管理', '0', '1', '1', '2018-03-20 06:24:04');
INSERT INTO `system_node` VALUES ('281', 'manage/backup/tablist', '获取数据表', '0', '1', '1', '2018-03-20 06:24:05');
INSERT INTO `system_node` VALUES ('282', 'manage/backup/backall', '备份数据库', '0', '1', '1', '2018-03-20 06:24:06');
INSERT INTO `system_node` VALUES ('283', 'manage/backup/backtables', '按表备份', '0', '1', '1', '2018-03-20 06:24:07');
INSERT INTO `system_node` VALUES ('284', 'manage/backup/recover', '还原数据库', '0', '1', '1', '2018-03-20 06:24:07');
INSERT INTO `system_node` VALUES ('285', 'manage/backup/downloadbak', '下载备份文件', '0', '1', '1', '2018-03-20 06:24:08');
INSERT INTO `system_node` VALUES ('286', 'manage/backup/deletebak', '删除备份', '0', '1', '1', '2018-03-20 06:24:09');
INSERT INTO `system_node` VALUES ('287', 'manage/article', '内容管理', '0', '1', '1', '2018-03-22 08:32:51');
INSERT INTO `system_node` VALUES ('288', 'admin/auth/google', '', '0', '0', '0', '2018-03-22 08:33:13');
INSERT INTO `system_node` VALUES ('289', 'admin/auth/bindgoogle', '生成绑定谷歌身份验证器二维码', '0', '1', '1', '2018-03-22 08:39:13');
INSERT INTO `system_node` VALUES ('290', 'manage/user', '用户管理', '0', '1', '1', '2018-03-22 08:41:20');
INSERT INTO `system_node` VALUES ('291', 'manage/sms', '短信配置', '0', '1', '1', '2018-03-22 08:44:54');
INSERT INTO `system_node` VALUES ('292', 'manage/site', '站点信息', '0', '1', '1', '2018-03-22 08:45:04');
INSERT INTO `system_node` VALUES ('293', 'manage/product', '支付产品管理', '0', '1', '1', '2018-03-22 08:47:47');
INSERT INTO `system_node` VALUES ('294', 'manage/order/del_batch', '批量删除无效订单', '0', '1', '1', '2018-03-22 08:48:42');
INSERT INTO `system_node` VALUES ('295', 'manage/order/del', '删除无效订单', '0', '1', '1', '2018-03-22 08:48:43');
INSERT INTO `system_node` VALUES ('296', 'manage/order', '交易明细', '0', '1', '1', '2018-03-22 08:50:10');
INSERT INTO `system_node` VALUES ('297', 'manage/log', '金额变动记录', '0', '1', '1', '2018-03-22 08:51:25');
INSERT INTO `system_node` VALUES ('298', 'manage/index', '主页', '0', '1', '1', '2018-03-22 08:51:55');
INSERT INTO `system_node` VALUES ('299', 'manage/goods', '商品管理', '0', '1', '1', '2018-03-22 08:52:09');
INSERT INTO `system_node` VALUES ('300', 'manage/email', '邮件配置', '0', '1', '1', '2018-03-22 08:53:07');
INSERT INTO `system_node` VALUES ('301', 'manage/complaint', '投诉管理', '0', '1', '1', '2018-03-22 08:54:06');
INSERT INTO `system_node` VALUES ('302', 'manage/channelaccount', '供应商账号管理', '0', '1', '1', '2018-03-22 08:54:52');
INSERT INTO `system_node` VALUES ('303', 'manage/channel', '供应商管理', '0', '1', '1', '2018-03-22 10:45:06');
INSERT INTO `system_node` VALUES ('304', 'manage/cash', '提现管理', '0', '1', '1', '2018-03-22 10:46:43');
INSERT INTO `system_node` VALUES ('305', 'manage/backup', '备份管理', '0', '1', '1', '2018-03-22 10:49:14');
INSERT INTO `system_node` VALUES ('306', 'manage/articlecategory', '文章分类管理', '0', '1', '1', '2018-03-22 10:53:43');
INSERT INTO `system_node` VALUES ('307', 'manage/goods/change_trade_no_status', null, '0', '1', '1', '2018-04-20 01:04:48');
INSERT INTO `system_node` VALUES ('308', 'shop/shop/index', null, '0', '0', '0', '2018-06-21 10:19:27');
INSERT INTO `system_node` VALUES ('309', 'shop/shop/category', null, '0', '0', '0', '2018-06-21 10:19:28');
INSERT INTO `system_node` VALUES ('310', 'shop/shop/goods', null, '0', '0', '0', '2018-06-21 10:20:39');
INSERT INTO `system_node` VALUES ('311', 'shop/shop/getgoodslist', null, '0', '0', '0', '2018-06-21 10:20:40');
INSERT INTO `system_node` VALUES ('312', 'shop/shop/getgoodsinfo', null, '0', '0', '0', '2018-06-21 10:20:41');
INSERT INTO `system_node` VALUES ('313', 'shop/shop/getrate', null, '0', '0', '0', '2018-06-21 10:20:41');
INSERT INTO `system_node` VALUES ('314', 'shop/shop/getdiscounts', null, '0', '0', '0', '2018-06-21 10:20:42');
INSERT INTO `system_node` VALUES ('315', 'shop/shop/getdiscount', null, '0', '0', '0', '2018-06-21 10:20:43');
INSERT INTO `system_node` VALUES ('316', 'shop/shop/checkvisitpassword', null, '0', '0', '0', '2018-06-21 10:20:43');
INSERT INTO `system_node` VALUES ('317', 'shop/shop/checkcoupon', null, '0', '0', '0', '2018-06-21 10:20:44');
INSERT INTO `system_node` VALUES ('318', 'manage/agent/close_all_site_agent', '', '0', '1', '1', '2019-04-28 09:41:43');
INSERT INTO `system_node` VALUES ('319', 'manage/agent/index', null, '0', '1', '1', '2019-04-28 09:41:44');
INSERT INTO `system_node` VALUES ('320', 'admin/mlog/index', null, '0', '1', '1', '2019-07-29 17:06:20');
INSERT INTO `system_node` VALUES ('321', 'admin/mlog/del', null, '0', '1', '1', '2019-07-29 17:06:21');
INSERT INTO `system_node` VALUES ('322', 'admin/nav/index', null, '0', '1', '1', '2019-07-29 17:06:25');
INSERT INTO `system_node` VALUES ('323', 'admin/nav/add', null, '0', '1', '1', '2019-07-29 17:06:26');
INSERT INTO `system_node` VALUES ('324', 'manage/cashchannelaccount/index', null, '0', '1', '1', '2019-07-29 17:06:40');
INSERT INTO `system_node` VALUES ('325', 'manage/cashchannelaccount/add', null, '0', '1', '1', '2019-07-29 17:06:41');
INSERT INTO `system_node` VALUES ('326', 'manage/cashchannelaccount/edit', null, '0', '1', '1', '2019-07-29 17:06:42');
INSERT INTO `system_node` VALUES ('327', 'manage/cashchannelaccount/del', null, '0', '1', '1', '2019-07-29 17:06:43');
INSERT INTO `system_node` VALUES ('328', 'manage/cashchannelaccount/clear', null, '0', '1', '1', '2019-07-29 17:06:43');
INSERT INTO `system_node` VALUES ('329', 'manage/cashchannelaccount/change_status', null, '0', '1', '1', '2019-07-29 17:06:44');
INSERT INTO `system_node` VALUES ('330', 'manage/cashchannelaccount/getfields', null, '0', '1', '1', '2019-07-29 17:06:44');
INSERT INTO `system_node` VALUES ('331', 'manage/invitecode/delnum', null, '0', '1', '1', '2019-07-29 17:07:20');
INSERT INTO `system_node` VALUES ('332', 'manage/invitecode/del', null, '0', '1', '1', '2019-07-29 17:07:22');
INSERT INTO `system_node` VALUES ('333', 'manage/invitecode/add', null, '0', '1', '1', '2019-07-29 17:07:23');
INSERT INTO `system_node` VALUES ('334', 'manage/invitecode/index', null, '0', '1', '1', '2019-07-29 17:07:24');
INSERT INTO `system_node` VALUES ('335', 'manage/goods/del', null, '0', '1', '1', '2019-07-29 17:07:31');
INSERT INTO `system_node` VALUES ('336', 'manage/goods/change_freeze', null, '0', '1', '1', '2019-07-29 17:07:33');
INSERT INTO `system_node` VALUES ('337', 'manage/content/del', null, '0', '1', '1', '2019-07-29 17:08:03');
INSERT INTO `system_node` VALUES ('338', 'manage/channel/change_available', null, '0', '1', '1', '2019-07-29 17:08:14');
INSERT INTO `system_node` VALUES ('339', 'manage/channel/install', null, '0', '1', '1', '2019-07-29 17:08:15');
INSERT INTO `system_node` VALUES ('340', 'manage/channel/uninstall', null, '0', '1', '1', '2019-07-29 17:08:15');
INSERT INTO `system_node` VALUES ('341', 'manage/cashchannel/change_status', null, '0', '1', '1', '2019-07-29 17:08:36');
INSERT INTO `system_node` VALUES ('342', 'manage/cashchannel/index', null, '0', '1', '1', '2019-07-29 17:08:37');
INSERT INTO `system_node` VALUES ('343', 'manage/cash/pay_batch', null, '0', '1', '1', '2019-07-29 17:08:39');
INSERT INTO `system_node` VALUES ('344', 'manage/cash/daifu', null, '0', '1', '1', '2019-07-29 17:08:40');
INSERT INTO `system_node` VALUES ('345', 'manage/cash/dumpcashs', null, '0', '1', '1', '2019-07-29 17:08:43');
INSERT INTO `system_node` VALUES ('346', 'manage/cash/getcashdata', null, '0', '1', '1', '2019-07-29 17:08:45');
INSERT INTO `system_node` VALUES ('347', 'manage/article/top', null, '0', '1', '1', '2019-07-29 17:08:53');
INSERT INTO `system_node` VALUES ('348', 'admin/nav/resume', null, '0', '1', '1', '2019-07-29 17:09:13');
INSERT INTO `system_node` VALUES ('349', 'admin/nav/forbid', null, '0', '1', '1', '2019-07-29 17:09:14');
INSERT INTO `system_node` VALUES ('350', 'admin/nav/del', null, '0', '1', '1', '2019-07-29 17:09:15');
INSERT INTO `system_node` VALUES ('351', 'admin/nav/edit', null, '0', '1', '1', '2019-07-29 17:09:15');
INSERT INTO `system_node` VALUES ('353', 'manage/complaint/win', null, '0', '1', '1', '2019-07-29 17:11:52');
INSERT INTO `system_node` VALUES ('354', 'manage/complaint/detail', null, '0', '1', '1', '2019-07-29 17:11:53');
INSERT INTO `system_node` VALUES ('355', 'manage/rate/change_status', null, '0', '1', '1', '2019-07-29 17:11:59');
INSERT INTO `system_node` VALUES ('356', 'manage/rate/del', null, '0', '1', '1', '2019-07-29 17:12:00');
INSERT INTO `system_node` VALUES ('357', 'manage/rate/save', null, '0', '1', '1', '2019-07-29 17:12:01');
INSERT INTO `system_node` VALUES ('358', 'manage/rate/detail', null, '0', '1', '1', '2019-07-29 17:12:02');
INSERT INTO `system_node` VALUES ('359', 'manage/rate/add', null, '0', '1', '1', '2019-07-29 17:12:03');
INSERT INTO `system_node` VALUES ('360', 'manage/rate/index', null, '0', '1', '1', '2019-07-29 17:12:05');
INSERT INTO `system_node` VALUES ('361', 'manage/site/spread', null, '0', '1', '1', '2019-07-29 17:12:11');
INSERT INTO `system_node` VALUES ('362', 'manage/site/clearcache', null, '0', '1', '1', '2019-07-29 17:12:12');
INSERT INTO `system_node` VALUES ('363', 'manage/user/allow_update', null, '0', '1', '1', '2019-07-29 17:12:18');
INSERT INTO `system_node` VALUES ('364', 'manage/user/getraterouteinfo', null, '0', '1', '1', '2019-07-29 17:12:23');
INSERT INTO `system_node` VALUES ('365', 'manage/user/unlock', null, '0', '1', '1', '2019-07-29 17:12:28');
INSERT INTO `system_node` VALUES ('366', 'manage/user/open_all_site_agent', null, '0', '1', '1', '2019-07-29 17:12:29');
INSERT INTO `system_node` VALUES ('367', 'admin/index/index', null, '0', '1', '1', '2019-07-29 17:20:02');
INSERT INTO `system_node` VALUES ('368', 'admin/index/main', null, '0', '1', '1', '2019-07-29 17:20:03');
INSERT INTO `system_node` VALUES ('369', 'admin/index/pass', null, '0', '1', '1', '2019-07-29 17:20:03');
INSERT INTO `system_node` VALUES ('370', 'admin/index/info', null, '0', '1', '1', '2019-07-29 17:20:04');
INSERT INTO `system_node` VALUES ('371', 'admin/index/version', null, '0', '1', '1', '2019-07-29 17:20:04');
INSERT INTO `system_node` VALUES ('372', 'admin/index/version_update', null, '0', '1', '1', '2019-07-29 17:20:05');
INSERT INTO `system_node` VALUES ('373', 'admin/index/autoupdate', null, '0', '1', '1', '2019-07-29 17:20:06');
INSERT INTO `system_node` VALUES ('375', 'manage/goods/agentlist', null, '0', '1', '1', '2020-12-15 23:24:12');
INSERT INTO `system_node` VALUES ('376', 'manage/goods/check', null, '0', '1', '1', '2020-12-15 23:24:13');
INSERT INTO `system_node` VALUES ('377', 'admin/cloud/user', null, '0', '1', '1', '2021-01-22 13:40:18');
INSERT INTO `system_node` VALUES ('378', 'admin/cloud/theme', null, '0', '1', '1', '2021-01-22 13:40:19');
INSERT INTO `system_node` VALUES ('379', 'admin/cloud/plugin', null, '0', '1', '1', '2021-01-22 13:40:21');
INSERT INTO `system_node` VALUES ('380', 'admin/cloud/server', null, '0', '1', '1', '2021-01-22 13:40:22');
INSERT INTO `system_node` VALUES ('381', 'admin/cloud/payment', null, '0', '1', '1', '2021-01-22 13:40:23');
INSERT INTO `system_node` VALUES ('382', 'admin/cloud/checkversion', null, '0', '1', '1', '2021-01-22 13:40:24');
INSERT INTO `system_node` VALUES ('383', 'admin/cloud/upgrade', null, '0', '1', '1', '2021-01-22 13:40:25');
INSERT INTO `system_node` VALUES ('384', 'admin/cloud/install', null, '0', '1', '1', '2021-01-22 13:40:25');
INSERT INTO `system_node` VALUES ('385', 'manage/complaint/send', null, '0', '1', '1', '2021-01-22 13:44:29');
INSERT INTO `system_node` VALUES ('386', 'manage/complaint/sendimg', null, '0', '1', '1', '2021-01-22 13:44:29');
INSERT INTO `system_node` VALUES ('387', 'manage/goods/agent_list', null, '0', '1', '1', '2021-01-22 13:51:51');
INSERT INTO `system_node` VALUES ('388', 'manage/order/senddelbatchsms', null, '0', '1', '1', '2021-01-22 13:52:43');
INSERT INTO `system_node` VALUES ('389', 'admin/cloud/auth', null, '0', '1', '1', '2021-01-24 03:00:30');

-- ----------------------------
-- Table structure for system_sequence
-- ----------------------------
DROP TABLE IF EXISTS `system_sequence`;
CREATE TABLE `system_sequence` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) DEFAULT NULL COMMENT '序号类型',
  `sequence` char(50) NOT NULL COMMENT '序号值',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_system_sequence_unique` (`type`,`sequence`) USING BTREE,
  KEY `index_system_sequence_type` (`type`),
  KEY `index_system_sequence_number` (`sequence`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统序号表';

-- ----------------------------
-- Records of system_sequence
-- ----------------------------

-- ----------------------------
-- Table structure for system_user
-- ----------------------------
DROP TABLE IF EXISTS `system_user`;
CREATE TABLE `system_user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT '用户登录名',
  `password` char(32) NOT NULL DEFAULT '' COMMENT '用户登录密码',
  `qq` varchar(16) DEFAULT NULL COMMENT '联系QQ',
  `mail` varchar(32) DEFAULT NULL COMMENT '联系邮箱',
  `phone` varchar(16) DEFAULT NULL COMMENT '联系手机号',
  `desc` varchar(255) DEFAULT '' COMMENT '备注说明',
  `login_num` bigint(20) unsigned DEFAULT '0' COMMENT '登录次数',
  `login_at` datetime DEFAULT NULL,
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态(0:禁用,1:启用)',
  `authorize` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) unsigned DEFAULT '0' COMMENT '删除状态(1:删除,0:未删)',
  `create_by` bigint(20) unsigned DEFAULT NULL COMMENT '创建人',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `google_secret_key` varchar(128) DEFAULT '' COMMENT '谷歌令牌密钥',
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_system_user_username` (`username`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统用户表';

-- ----------------------------
-- Records of system_user
-- ----------------------------

-- ----------------------------
-- Table structure for unique_orderno
-- ----------------------------
DROP TABLE IF EXISTS `unique_orderno`;
CREATE TABLE `unique_orderno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `trade_no` varchar(100) NOT NULL COMMENT '订单号',
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_trade_no` (`trade_no`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of unique_orderno
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '上级ID',
  `openid` varchar(50) NOT NULL DEFAULT '' COMMENT '微信openid',
  `username` varchar(50) NOT NULL,
  `password` char(32) NOT NULL,
  `mobile` varchar(15) NOT NULL DEFAULT '' COMMENT '手机号',
  `qq` varchar(16) NOT NULL,
  `email` varchar(50) NOT NULL,
  `subdomain` varchar(250) NOT NULL DEFAULT '' COMMENT '子域名',
  `shop_name` varchar(20) NOT NULL DEFAULT '' COMMENT '店铺名称',
  `shop_notice` varchar(200) NOT NULL DEFAULT '' COMMENT '公告通知',
  `statis_code` varchar(1024) NOT NULL DEFAULT '' COMMENT '统计代码',
  `pay_theme` varchar(255) NOT NULL DEFAULT 'default' COMMENT '支付页风格',
  `pay_theme_mobile` varchar(100) DEFAULT 'default' COMMENT '支付模板手机端',
  `stock_display` tinyint(3) unsigned NOT NULL DEFAULT '2' COMMENT '库存展示方式 1实际库存 2库存范围',
  `money` decimal(10,3) NOT NULL DEFAULT '0.000',
  `rebate` decimal(10,3) unsigned NOT NULL DEFAULT '0.000',
  `freeze_money` decimal(10,3) NOT NULL DEFAULT '0.000',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '0未审核 1已审核',
  `is_freeze` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '是否冻结 0否 1是',
  `create_at` int(10) unsigned NOT NULL,
  `ip` varchar(50) DEFAULT '' COMMENT 'IP地址',
  `website` varchar(255) NOT NULL DEFAULT '' COMMENT '商户网站',
  `is_close` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '是否关闭店铺 0否 1是',
  `shop_notice_auto_pop` tinyint(4) NOT NULL DEFAULT '1' COMMENT '商家公告是否自动弹出',
  `cash_type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '提现方式',
  `login_auth` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否开启安全登录',
  `login_auth_type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '安全登录验证方式，1：短信，2：邮件，3：谷歌密码验证',
  `google_secret_key` varchar(128) DEFAULT '' COMMENT '谷歌令牌密钥',
  `shop_gouka_protocol_pop` tinyint(4) NOT NULL DEFAULT '1' COMMENT '购卡协议是否自动弹出',
  `user_notice_auto_pop` tinyint(4) NOT NULL DEFAULT '1' COMMENT '商家是否自动弹出',
  `login_key` int(11) NOT NULL DEFAULT '0' COMMENT '用户登录标记',
  `fee_payer` tinyint(4) NOT NULL DEFAULT '0' COMMENT '订单手续费支付方，0：跟随系统，1：商家承担，2买家承担',
  `settlement_type` tinyint(4) NOT NULL DEFAULT '-1' COMMENT '结算方式，-1：跟随系统，1:T1结算，0:T0结算',
  `agent_key` varchar(255) NOT NULL DEFAULT '' COMMENT '代理商品对接密钥',
  `agent_goods_switch` tinyint(1) NOT NULL DEFAULT '0' COMMENT '商品代理功能开关 0：关闭，1：开启',
  `need_check_agent` tinyint(1) NOT NULL DEFAULT '1' COMMENT '代理是否需要审核：0不审核 1审核',
  `music` varchar(100) DEFAULT NULL,
  `pc_template` varchar(50) NOT NULL DEFAULT 'default' COMMENT '用户电脑端模板',
  `mobile_template` varchar(50) NOT NULL DEFAULT 'default' COMMENT '用户手机端模板',
  `wechat_stock_notify` tinyint(1) NOT NULL DEFAULT '1',
  `wechat_sell_notify` tinyint(1) NOT NULL DEFAULT '1',
  `wechat_signin_notify` tinyint(1) NOT NULL DEFAULT '1',
  `wechat_cash_notify` tinyint(1) NOT NULL DEFAULT '1',
  `wechat_complaint_notify` tinyint(1) NOT NULL DEFAULT '1',
  `oauth2_qq_openid` varchar(100) DEFAULT NULL,
  `oauth2_wechat_openid` varchar(100) DEFAULT NULL,
  `rate_type` tinyint(1) DEFAULT '0',
  `lock_card` tinyint(1) DEFAULT '0',
  `payapi` tinyint(1) DEFAULT '0',
  `paykey` varchar(50) DEFAULT NULL,
  `fee_money` decimal(10,3) DEFAULT '0.000',
  `deposit_money` decimal(10,3) DEFAULT '0.000',
  `qqqun` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------

-- ----------------------------
-- Table structure for user_analysis
-- ----------------------------
DROP TABLE IF EXISTS `user_analysis`;
CREATE TABLE `user_analysis` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `date` date NOT NULL,
  `day_amount` decimal(10,3) NOT NULL DEFAULT '0.000',
  `order_count` int(11) NOT NULL DEFAULT '0',
  `finally_amount` decimal(10,3) NOT NULL DEFAULT '0.000',
  `profit` decimal(10,3) NOT NULL DEFAULT '0.000' COMMENT '利润',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_analysis
-- ----------------------------

-- ----------------------------
-- Table structure for user_channel
-- ----------------------------
DROP TABLE IF EXISTS `user_channel`;
CREATE TABLE `user_channel` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `channel_id` int(10) unsigned NOT NULL,
  `status` tinyint(3) unsigned NOT NULL DEFAULT '1',
  `custom_status` tinyint(3) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`channel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_channel
-- ----------------------------

-- ----------------------------
-- Table structure for user_collect
-- ----------------------------
DROP TABLE IF EXISTS `user_collect`;
CREATE TABLE `user_collect` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `type` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '类型 1支付宝 2微信 3银行卡',
  `info` text NOT NULL,
  `create_at` int(10) unsigned NOT NULL DEFAULT '0',
  `collect_img` tinytext,
  `allow_update` tinyint(4) NOT NULL DEFAULT '0' COMMENT '1为允许用户修改收款信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_collect
-- ----------------------------

-- ----------------------------
-- Table structure for user_login_error_log
-- ----------------------------
DROP TABLE IF EXISTS `user_login_error_log`;
CREATE TABLE `user_login_error_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login_name` varchar(50) NOT NULL DEFAULT '' COMMENT '登录名',
  `password` varchar(255) NOT NULL DEFAULT '' COMMENT '尝试密码',
  `user_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0：普通用户 1：后台管理员账号',
  `login_from` int(1) NOT NULL DEFAULT '0' COMMENT '登录来源：0：前台 1：总后台',
  `login_time` int(11) NOT NULL DEFAULT '0' COMMENT '登录时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_login_error_log
-- ----------------------------

-- ----------------------------
-- Table structure for user_login_log
-- ----------------------------
DROP TABLE IF EXISTS `user_login_log`;
CREATE TABLE `user_login_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `ip` varchar(15) NOT NULL DEFAULT '',
  `create_at` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_login_log
-- ----------------------------

-- ----------------------------
-- Table structure for user_money_log
-- ----------------------------
DROP TABLE IF EXISTS `user_money_log`;
CREATE TABLE `user_money_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `business_type` varchar(100) NOT NULL,
  `user_id` int(10) unsigned NOT NULL COMMENT '用户ID',
  `from_user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '来源用户ID',
  `agent_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '代理模式 1：普通代理 2：全站代理',
  `trade_no` varchar(255) NOT NULL DEFAULT '' COMMENT '相关订单号',
  `money` decimal(10,3) NOT NULL COMMENT '变动金额',
  `balance` decimal(10,3) NOT NULL COMMENT '剩余',
  `reason` varchar(255) NOT NULL DEFAULT '' COMMENT '变动原因',
  `create_at` int(10) unsigned NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `business_type` (`business_type`) USING BTREE,
  KEY `user_id` (`user_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_money_log
-- ----------------------------

-- ----------------------------
-- Table structure for user_proxy
-- ----------------------------
DROP TABLE IF EXISTS `user_proxy`;
CREATE TABLE `user_proxy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `child_user_id` int(11) NOT NULL COMMENT '父级代理id',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态 0:待审核  1:已审核 -1:拒绝',
  `create_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of user_proxy
-- ----------------------------

-- ----------------------------
-- Table structure for user_rate
-- ----------------------------
DROP TABLE IF EXISTS `user_rate`;
CREATE TABLE `user_rate` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL COMMENT '用户ID',
  `channel_id` int(10) unsigned NOT NULL COMMENT '渠道ID',
  `rate` decimal(10,4) unsigned NOT NULL COMMENT '费率',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`channel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_rate
-- ----------------------------

-- ----------------------------
-- Table structure for user_risk
-- ----------------------------
DROP TABLE IF EXISTS `user_risk`;
CREATE TABLE `user_risk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `risk_type` int(11) NOT NULL DEFAULT '0' COMMENT '0 系统警告  1下架警告 2关闭交易 3封禁',
  `desc` varchar(500) DEFAULT NULL,
  `create_at` int(11) DEFAULT NULL,
  `update_at` int(11) DEFAULT NULL,
  `reason` varchar(500) DEFAULT NULL,
  `hash` varchar(32) DEFAULT NULL,
  `from_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0商品名 1商品描述 2投诉信息  3投诉率 4手动添加',
  `from_id` varchar(50) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0待审核 1已审核  2忽略白名单',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_risk
-- ----------------------------

-- ----------------------------
-- Table structure for verify_email_error_log
-- ----------------------------
DROP TABLE IF EXISTS `verify_email_error_log`;
CREATE TABLE `verify_email_error_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT '' COMMENT '前台用户名',
  `admin` varchar(50) DEFAULT '' COMMENT '管理员用户名',
  `email` varchar(20) DEFAULT '' COMMENT '邮箱',
  `code` varchar(10) DEFAULT '' COMMENT '输入验证码',
  `screen` varchar(20) DEFAULT '' COMMENT '使用场景',
  `type` tinyint(1) DEFAULT '0' COMMENT '1：短信验证码 2：谷歌身份验证, 0:邮箱',
  `ctime` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of verify_email_error_log
-- ----------------------------

-- ----------------------------
-- Table structure for verify_error_log
-- ----------------------------
DROP TABLE IF EXISTS `verify_error_log`;
CREATE TABLE `verify_error_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT '' COMMENT '前台用户名',
  `admin` varchar(50) DEFAULT '' COMMENT '管理员用户名',
  `mobile` varchar(20) DEFAULT '' COMMENT '手机号码',
  `code` varchar(10) DEFAULT '' COMMENT '输入验证码',
  `screen` varchar(20) DEFAULT '' COMMENT '使用场景',
  `type` tinyint(1) DEFAULT '0' COMMENT '1：短信验证码 2：谷歌身份验证',
  `ctime` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of verify_error_log
-- ----------------------------

-- ----------------------------
-- Table structure for wechat_fans
-- ----------------------------
DROP TABLE IF EXISTS `wechat_fans`;
CREATE TABLE `wechat_fans` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '粉丝表ID',
  `appid` varchar(50) DEFAULT NULL COMMENT '公众号Appid',
  `groupid` bigint(20) unsigned DEFAULT NULL COMMENT '分组ID',
  `tagid_list` varchar(100) DEFAULT '' COMMENT '标签id',
  `is_back` tinyint(1) unsigned DEFAULT '0' COMMENT '是否为黑名单用户',
  `subscribe` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '用户是否订阅该公众号，0：未关注，1：已关注',
  `openid` char(100) NOT NULL DEFAULT '' COMMENT '用户的标识，对当前公众号唯一',
  `spread_openid` char(100) DEFAULT NULL COMMENT '推荐人OPENID',
  `spread_at` datetime DEFAULT NULL,
  `nickname` varchar(100) DEFAULT NULL COMMENT '用户的昵称',
  `sex` tinyint(1) unsigned DEFAULT NULL COMMENT '用户的性别，值为1时是男性，值为2时是女性，值为0时是未知',
  `country` varchar(50) DEFAULT NULL COMMENT '用户所在国家',
  `province` varchar(50) DEFAULT NULL COMMENT '用户所在省份',
  `city` varchar(50) DEFAULT NULL COMMENT '用户所在城市',
  `language` varchar(50) DEFAULT NULL COMMENT '用户的语言，简体中文为zh_CN',
  `headimgurl` varchar(500) DEFAULT NULL COMMENT '用户头像',
  `subscribe_time` bigint(20) unsigned DEFAULT NULL COMMENT '用户关注时间',
  `subscribe_at` datetime DEFAULT NULL COMMENT '关注时间',
  `unionid` varchar(100) DEFAULT NULL COMMENT 'unionid',
  `remark` varchar(50) DEFAULT NULL COMMENT '备注',
  `expires_in` bigint(20) unsigned DEFAULT '0' COMMENT '有效时间',
  `refresh_token` varchar(200) DEFAULT NULL COMMENT '刷新token',
  `access_token` varchar(200) DEFAULT NULL COMMENT '访问token',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `index_wechat_fans_spread_openid` (`spread_openid`) USING BTREE,
  KEY `index_wechat_fans_openid` (`openid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='微信粉丝';

-- ----------------------------
-- Records of wechat_fans
-- ----------------------------

-- ----------------------------
-- Table structure for wechat_fans_tags
-- ----------------------------
DROP TABLE IF EXISTS `wechat_fans_tags`;
CREATE TABLE `wechat_fans_tags` (
  `id` bigint(20) unsigned NOT NULL COMMENT '标签ID',
  `appid` char(50) DEFAULT NULL COMMENT '公众号APPID',
  `name` varchar(35) DEFAULT NULL COMMENT '标签名称',
  `count` int(11) unsigned DEFAULT NULL COMMENT '总数',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建日期',
  KEY `index_wechat_fans_tags_id` (`id`) USING BTREE,
  KEY `index_wechat_fans_tags_appid` (`appid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='微信会员标签';

-- ----------------------------
-- Records of wechat_fans_tags
-- ----------------------------

-- ----------------------------
-- Table structure for wechat_keys
-- ----------------------------
DROP TABLE IF EXISTS `wechat_keys`;
CREATE TABLE `wechat_keys` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `appid` char(50) DEFAULT NULL COMMENT '公众号APPID',
  `type` varchar(20) DEFAULT NULL COMMENT '类型，text 文件消息，image 图片消息，news 图文消息',
  `keys` varchar(100) DEFAULT NULL COMMENT '关键字',
  `content` text COMMENT '文本内容',
  `image_url` varchar(255) DEFAULT NULL COMMENT '图片链接',
  `voice_url` varchar(255) DEFAULT NULL COMMENT '语音链接',
  `music_title` varchar(100) DEFAULT NULL COMMENT '音乐标题',
  `music_url` varchar(255) DEFAULT NULL COMMENT '音乐链接',
  `music_image` varchar(255) DEFAULT NULL COMMENT '音乐缩略图链接',
  `music_desc` varchar(255) DEFAULT NULL COMMENT '音乐描述',
  `video_title` varchar(100) DEFAULT NULL COMMENT '视频标题',
  `video_url` varchar(255) DEFAULT NULL COMMENT '视频URL',
  `video_desc` varchar(255) DEFAULT NULL COMMENT '视频描述',
  `news_id` bigint(20) unsigned DEFAULT NULL COMMENT '图文ID',
  `sort` bigint(20) unsigned DEFAULT '0' COMMENT '排序字段',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '0 禁用，1 启用',
  `create_by` bigint(20) unsigned DEFAULT NULL COMMENT '创建人',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT=' 微信关键字';

-- ----------------------------
-- Records of wechat_keys
-- ----------------------------
INSERT INTO `wechat_keys` VALUES ('1', null, 'image', 'subscribe', '任何问题请联系平台客服QQ，感谢支持。', 'http://www.demo.com/static/theme/default/img/image.png', '', '音乐标题', '', 'https://www.demo.com/static/theme/default/img/image.png', '音乐描述', '视频标题', '', '视频描述', '0', '0', '1', null, '2021-01-24 15:29:24');
INSERT INTO `wechat_keys` VALUES ('2', null, 'text', 'default', '任何问题请联系平台客服QQ，感谢支持。', 'https://www.demo.com/static/theme/default/img/image.png', '', '音乐标题', '', 'https://www.demo.com/static/theme/default/img/image.png', '音乐描述', '视频标题', '', '视频描述', '0', '0', '1', null, '2020-12-11 23:22:16');

-- ----------------------------
-- Table structure for wechat_menu
-- ----------------------------
DROP TABLE IF EXISTS `wechat_menu`;
CREATE TABLE `wechat_menu` (
  `id` bigint(16) unsigned NOT NULL AUTO_INCREMENT,
  `index` bigint(20) DEFAULT NULL,
  `pindex` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '父id',
  `type` varchar(24) NOT NULL DEFAULT '' COMMENT '菜单类型 null主菜单 link链接 keys关键字',
  `name` varchar(256) NOT NULL DEFAULT '' COMMENT '菜单名称',
  `content` text NOT NULL COMMENT '文字内容',
  `sort` bigint(20) unsigned DEFAULT '0' COMMENT '排序',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '状态(0禁用1启用)',
  `create_by` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '创建人',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `index_wechat_menu_pindex` (`pindex`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=318 DEFAULT CHARSET=utf8 COMMENT='微信菜单配置';

-- ----------------------------
-- Records of wechat_menu
-- ----------------------------
INSERT INTO `wechat_menu` VALUES ('317', '1', '0', 'view', '商户登录', 'http://www.demo.com/login', '0', '1', '0', '2021-01-19 22:35:48');

-- ----------------------------
-- Table structure for wechat_news
-- ----------------------------
DROP TABLE IF EXISTS `wechat_news`;
CREATE TABLE `wechat_news` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `media_id` varchar(100) DEFAULT NULL COMMENT '永久素材MediaID',
  `local_url` varchar(300) DEFAULT NULL COMMENT '永久素材显示URL',
  `article_id` varchar(60) DEFAULT NULL COMMENT '关联图文ID，用，号做分割',
  `is_deleted` tinyint(1) unsigned DEFAULT '0' COMMENT '是否删除',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) DEFAULT NULL COMMENT '创建人',
  PRIMARY KEY (`id`),
  KEY `index_wechat_new_artcle_id` (`article_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='微信图文表';

-- ----------------------------
-- Records of wechat_news
-- ----------------------------

-- ----------------------------
-- Table structure for wechat_news_article
-- ----------------------------
DROP TABLE IF EXISTS `wechat_news_article`;
CREATE TABLE `wechat_news_article` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL COMMENT '素材标题',
  `local_url` varchar(300) DEFAULT NULL COMMENT '永久素材显示URL',
  `show_cover_pic` tinyint(4) unsigned DEFAULT '0' COMMENT '是否显示封面 0不显示，1 显示',
  `author` varchar(20) DEFAULT NULL COMMENT '作者',
  `digest` varchar(300) DEFAULT NULL COMMENT '摘要内容',
  `content` longtext COMMENT '图文内容',
  `content_source_url` varchar(200) DEFAULT NULL COMMENT '图文消息原文地址',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) DEFAULT NULL COMMENT '创建人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='微信素材表';

-- ----------------------------
-- Records of wechat_news_article
-- ----------------------------

-- ----------------------------
-- Table structure for wechat_news_image
-- ----------------------------
DROP TABLE IF EXISTS `wechat_news_image`;
CREATE TABLE `wechat_news_image` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `md5` varchar(32) DEFAULT NULL COMMENT '文件md5',
  `local_url` varchar(300) DEFAULT NULL COMMENT '本地文件链接',
  `media_url` varchar(300) DEFAULT NULL COMMENT '远程图片链接',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `index_wechat_news_image_md5` (`md5`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='微信服务器图片';

-- ----------------------------
-- Records of wechat_news_image
-- ----------------------------

-- ----------------------------
-- Table structure for wechat_news_media
-- ----------------------------
DROP TABLE IF EXISTS `wechat_news_media`;
CREATE TABLE `wechat_news_media` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `appid` varchar(200) DEFAULT NULL COMMENT '公众号ID',
  `md5` varchar(32) DEFAULT NULL COMMENT '文件md5',
  `type` varchar(20) DEFAULT NULL COMMENT '媒体类型',
  `media_id` varchar(100) DEFAULT NULL COMMENT '永久素材MediaID',
  `local_url` varchar(300) DEFAULT NULL COMMENT '本地文件链接',
  `media_url` varchar(300) DEFAULT NULL COMMENT '远程图片链接',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='微信素材表';

-- ----------------------------
-- Records of wechat_news_media
-- ----------------------------
