import React from "react";
import { settings } from "../../data/dataStore";
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import styles from './Column.scss';


class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    }
    addCard(title) {
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
                title,
                icon: 'list-alt',

              }
            ]
          }
        ));
      }

  render() {
    return (
    <section className={styles.component}>
        <h3 className={styles.title}>
            {this.props.title}
            <span className={styles.icon}>{this.props.icon}</span>
            </h3>
            <div className={styles.cards}>
                {this.state.cards.map(({ key, ...cardProps }) => (
                <Card key={key} {...cardProps}/>
                ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
                    </div>
                    </section>

                    )
                }
            }

            export default Column;