@RestController
public class RootController {

    @GetMapping("/")
    public String home() {
        return "AgriGenius Backend Running Successfully 🚀";
    }
}