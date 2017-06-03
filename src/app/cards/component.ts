import { Component } from '@angular/core';

import { HeaderService } from '../shared/header/service';
import { Card } from '../../models/card';
import { Deck } from '../../models/deck';

@Component({
    templateUrl: './component.html',
    styleUrls: ['./component.styl']
})
export class CardsComponent {

    deck: Deck;
    hands: Array<Array<Card>> = [];
    handSize: number = 5;
    numberOfHands: number = 1;
    showDeck: boolean = false;

    constructor (headerService: HeaderService) {

        headerService.setTitle('Cards');

        this.deck = new Deck();
        // console.log('deck constructed: ', this.deck);

    }

    dealHands () {

        console.log(`prepare to deal ${this.handSize} cards to ${this.numberOfHands} hands`);
        let newDeal = this.deck.deal(this.numberOfHands, this.handSize);
        this.hands = newDeal.hands;

     }

    shuffleDeck () {

        this.deck.shuffleAll();
        // console.log('deck shuffled: ', this.deck);

    }

}
