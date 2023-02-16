from faker import Faker
import pandas as pd


def main():
    fake = Faker('lt_LT')

    data = [{
            'name': fake.name(),
            'email': fake.email(),
            'phone': fake.phone_number()
        }
        for _ in range(50)
    ]

    df = pd.DataFrame(data)
    df.to_csv('employee.csv', index=False)


if __name__ == '__main__':
    main()
