import React, { Component } from 'react';
import { Menu, } from 'antd';
import Link from 'next/link';
import { connect } from 'react-redux';

const { SubMenu } = Menu;

class PanelCategories extends Component {
    constructor(props) {
        super(props);
    }

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {

        const { shopCategories } = this.props;

        return (
            <div className="ps-panel__wrapper" style={{ paddingBottom: 80 }}>
                <div className="ps-panel__header">
                    <h3>{this.props.panel_categories.title}</h3>
                </div>
                <div className="ps-panel__content">
                    <Menu
                        mode="inline"
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}>
                        {shopCategories.map(category => (
                            <Menu.Item key={category.text}>
                                <Link href={category.url}>
                                    <a>{category.text}</a>
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        panel_categories: state.lang.langData.navigation_list.panel_categories,
        shopCategories: state.lang.langData.product_categories
    }
}

export default connect(mapStateToProps)(PanelCategories);
