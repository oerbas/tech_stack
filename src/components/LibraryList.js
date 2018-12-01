import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component{
    static renderItem(library) {
        return <ListItem library={library} />;
    }

    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={({ item }) => LibraryList.renderItem(item)}
                keyExtractor={(library) => library.id.toString()}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);