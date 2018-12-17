# Make Widget Aliquot

This operation type is used to make a Widget aliquot from a Widget stock by taking 10 uL from
the stock and diluting it with 90 uL of water to make the aliquot. 
### Inputs


- **Widget Stock** [W]  
  - <a href='#' onclick='easy_select("Sample Types", "Widget")'>Widget</a> / <a href='#' onclick='easy_select("Containers", "Widget Stock")'>Widget Stock</a>



### Outputs


- **Widget Aliquot** [W]  
  - <a href='#' onclick='easy_select("Sample Types", "Widget")'>Widget</a> / <a href='#' onclick='easy_select("Containers", "Widget Aliquot")'>Widget Aliquot</a>

### Precondition <a href='#' id='precondition'>[show]</a>
```ruby
def precondition(_op)
  true
end
```

### Protocol Code <a href='#' id='protocol'>[show]</a>
```ruby
# This is a protocol used to test Aquarium's import / export functionality.

needs "Test/WidgetLib"

class Protocol
    
  include WidgetLib

  def main

    operations.retrieve.make

    show do
        title "Dilute Widgets"
        table operations.start_table
          .input_item("Widget Stock")
          .output_item("Widget Aliquot")
          .custom_column(heading: "Amount from Stock (µL)") { |op| 10 }
          .custom_column(heading: "Amount of Water (µL)") { |op| 90 }          
          .end_table
    end

    operations.store
    
    say_thanks

    {}

  end

end

```
