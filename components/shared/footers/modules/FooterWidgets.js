import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

const FooterWidgets = (props) => {
    const { contact_us, quick_links, company, buesiness } = props;
    return (
        <div className="ps-footer__widgets">

            <aside className="widget widget_footer widget_contact-us">
                <h4 className="widget-title">{contact_us.title}</h4>
                <div className="widget_content">
                    <p className="call-us">
                        {contact_us.week_days_label} : 10 a.m. - 7 p.m. <br />
                        {contact_us.saturday_label} .:  10 a.m. - 4 p.m.
                </p>
                    <h3 className="company-number">+7 (987) 254-17-18</h3>
                    <p className="company-adress">
                        г. Уфа, ул.Рихарда Зорге, 8 <br />
                        <a href="mailto:info@era-auto.ru">info@era-auto.ru</a>
                    </p>

                </div>
            </aside>
            <aside className="widget widget_footer">
                <h4 className="widget-title">{quick_links.title}</h4>
                <ul className="ps-list--link">
                    <li>
                        <Link href="/page/blank">
                            <a>{quick_links.policy_label}</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/page/blank">
                            <a>{quick_links.term_and_conditions_label}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/blank">
                            <a>{quick_links.shipping_label}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/blank">
                            <a>{quick_links.return_label}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/faqs">
                            <a>{quick_links.faqs_label}</a>
                        </Link>
                    </li>
                </ul>
            </aside>
            <aside className="widget widget_footer">
                <h4 className="widget-title">{company.title}</h4>
                <ul className="ps-list--link">
                    <li>
                        <Link href="/page/about-us">
                            <a>{company.about_us_label}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/blank">
                            <a>{company.affiliate_label}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/blank">
                            <a>{company.career_label}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/contact-us">
                            <a>{company.contact_label}</a>
                        </Link>
                    </li>
                </ul>
            </aside>
            <aside className="widget widget_footer">
                <h4 className="widget-title">{buesiness.title}</h4>
                <ul className="ps-list--link">
                    <li>
                        <Link href="/page/about-us">
                            <a>{buesiness.our_press_label}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/account/checkout">
                            <a>{buesiness.checkout_label}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/account/user-information">
                            <a>{buesiness.my_account_label}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>{buesiness.shop_label}</a>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    )
}



function stateToProps(state) {
    return state.lang.langData.footer;
}

export default connect(stateToProps)(FooterWidgets);
