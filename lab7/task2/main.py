from models import Dog, Cat

def main():
    dog1 = Dog("Buddy", 3, "Golden Retriever")
    dog2 = Dog("Max", 5, "Beagle")
    cat1 = Cat("Whiskers", 2, True)
    cat2 = Cat("Luna", 4, False)

    animals = [dog1, dog2, cat1, cat2]

    for animal in animals:
        print(f"--- Processing {animal} ---")
        print(f"Info: {animal.get_info()}")
        print(f"Sound: {animal.make_sound()}")

        if isinstance(animal, Dog):
            print(animal.fetch("ball"))
        elif isinstance(animal, Cat):
            print(animal.scratch())
        print()


if __name__ == "__main__":
    main()