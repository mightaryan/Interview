def value_of_card(card):
    if card in ["K", "Q", "J"]:
        return 10
    elif card == "A":
        return 1
    else:
        return int(card)


def higher_card(card_one, card_two):
    val_one = value_of_card(card_one)
    val_two = value_of_card(card_two)
    
    if val_one > val_two:
        return card_one
    elif val_one == val_two:
        return card_one, card_two
    else:
        return card_two

def value_of_ace(card_one, card_two):
    # Total value of current hand without the new Ace
    total = value_of_card(card_one) + value_of_card(card_two)
    
    # If either card is already an Ace, new Ace must be 1
    if card_one == "A" or card_two == "A":
        return 1
    
    # If adding 11 keeps total ≤ 21, Ace can be 11, otherwise 1
    if total + 11 <= 21:
        return 11
    else:
        return 1

def is_blackjack(card_one, card_two):
    ten_cards = ['10', 'J', 'Q', 'K']
    
    # Check if one card is Ace and the other is a ten-card
    if (card_one == 'A' and card_two in ten_cards) or (card_two == 'A' and card_one in ten_cards):
        return True
    else:
        return False

def can_split_pairs(card_one, card_two):
    if value_of_card(card_one) == value_of_card(card_two):
        return True
    else:
        return False
    pass


def can_double_down(card_one, card_two):
    total = value_of_card(card_one) + value_of_card(card_two)
    if total in [9, 10, 11]:
        return True
    else:
        return False
