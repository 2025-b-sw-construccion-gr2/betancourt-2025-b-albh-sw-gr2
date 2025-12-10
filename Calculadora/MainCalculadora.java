import java.util.Scanner;

public class MainCalculadora {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int opcion = 0;
        
        while (opcion != 3) {
            System.out.println("\n=== Calculadora Modular ===");
            System.out.println("1. Sumar");
            System.out.println("2. Restar");
            System.out.println("3. Salir");
            System.out.print("Elige una opción: ");
            opcion = sc.nextInt();

            if (opcion == 1) {
                System.out.println("Ejecutando módulo de suma...");
                Suma suma = new Suma();
                System.out.print("Ingrese el primer número: ");
                double num1 = sc.nextDouble();
                System.out.print("Ingrese el segundo número: ");
                double num2 = sc.nextDouble();
                double resultado = suma.sumar(num1, num2);
                System.out.println("Resultado: " + num1 + " + " + num2 + " = " + resultado);
            } else if (opcion == 2) {
                System.out.println("Ejecutando módulo de resta...");
                Resta resta = new Resta();
                System.out.print("Ingrese el primer número: ");
                double num1 = sc.nextDouble();
                System.out.print("Ingrese el segundo número: ");
                double num2 = sc.nextDouble();
                double resultado = resta.restar(num1, num2);
                System.out.println("Resultado: " + num1 + " - " + num2 + " = " + resultado);
            } else if (opcion == 3) {
                System.out.println("Saliendo exitosamente...");
            } else {
                System.out.println("Opción inválida");
            }
        }

        sc.close();
    }
}
