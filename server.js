const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
users = ["Alice", "Bob", "Charlie", "David", "Emma"]
ages = [25, 31, 28, 35, 22]
active = [True, False, True, True, False]

def get_active_users(names, status):
    return [name for name, is_active in zip(names, status) if is_active]

def get_average_age(values):
    return sum(values) / len(values)

def find_user(names, target):
    return target in names

active_users = get_active_users(users, active)
average_age = get_average_age(ages)
exists = find_user(users, "Alice")

print("Active users:", active_users)
print("Average age:", average_age)
print("Alice exists:", exists)

for user in users:
    print("User:", user)

result = [age * 2 for age in ages]
print("Doubled ages:", result)
import java.util.*;

public class Example {
    public static void main(String[] args) {
        List<String> users = Arrays.asList("Alice", "Bob", "Charlie", "David");
        List<Integer> ages = Arrays.asList(25, 31, 28, 35);

        System.out.println("Users: " + users);

        int total = 0;
        for (int age : ages) {
            total += age;
        }

        double average = (double) total / ages.size();
        System.out.println("Average age: " + average);

        for (String user : users) {
            System.out.println("User: " + user);
        }

        String target = "Alice";
        boolean exists = users.contains(target);
        System.out.println("Alice exists: " + exists);
    }
}
public class Example
{
    public static void Main()
    {
        System.out.println("Alice exists: " + exists);

      
