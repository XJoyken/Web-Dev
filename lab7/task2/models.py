class Animal:
    def __init__(self, name, species, age):
        self.name = name
        self.species = species
        self.age = age

    def make_sound(self):
        return "Some generic animal sound"

    def get_info(self):
        return f"{self.name} is a {self.age}-year-old {self.species}."

    def __str__(self):
        return f"Animal: {self.name} ({self.species})"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, "Dog", age)
        self.breed = breed

    def make_sound(self):
        return "Woof! Woof!"

    def fetch(self, item):
        return f"{self.name} successfully fetched the {item}!"

    def __str__(self):
        return f"Dog: {self.name}, Breed: {self.breed}"


class Cat(Animal):
    def __init__(self, name, age, is_indoor):
        super().__init__(name, "Cat", age)
        self.is_indoor = is_indoor

    def make_sound(self):
        return "Meow..."

    def scratch(self):
        return f"{self.name} is scratching the furniture!"

    def __str__(self):
        status = "indoor" if self.is_indoor else "outdoor"
        return f"Cat: {self.name}, Status: {status}"